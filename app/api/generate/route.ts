import { NextResponse } from "next/server";
import Groq from "groq-sdk";



const apiKey = process.env.mailRush;
const groq = new Groq({
  apiKey: apiKey ?? "",
});

export async function POST(req: Request) {
  try {
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GROQ API key (mailRush)" },
        { status: 500 }
      );
    }

    let input: unknown;
    try {
      const body = await req.json();
      input = (body as { input?: unknown })?.input;
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    if (typeof input !== "string" || input.trim().length === 0) {
      return NextResponse.json(
        { error: "'input' must be a non-empty string" },
        { status: 400 }
      );
    }

    const prompt = `
        User input:
        "${input}"

        TASK:
        1. Extract the email address
        2. Understand the job role
        3. Generate a professional job application email

        Return ONLY valid JSON in this format:
        {
        "email": "",
        "subject": "",
        "body": ""
        }
        `;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
      response_format: { type: "json_object" } as any,
    });

    const raw = completion.choices?.[0]?.message?.content ?? "";
    if (!raw || typeof raw !== "string") {
      return NextResponse.json(
        { error: "Empty response from model" },
        { status: 502 }
      );
    }

    const extractCandidate = (text: string): string => {
      let cleaned = text.replace(/```[\s\S]*?```/g, (block) => {
        const s = block.indexOf("{");
        const e = block.lastIndexOf("}");
        return s !== -1 && e !== -1 ? block.slice(s, e + 1) : "";
      });
      const start = cleaned.indexOf("{");
      const end = cleaned.lastIndexOf("}");
      return start !== -1 && end !== -1 ? cleaned.slice(start, end + 1) : cleaned;
    };

    const sanitizeKeys = (jsonish: string): string => {
      let out = jsonish.replace(/(^|[\s,{])(email|subject|body)\s*:/g, (m) => {
        return m.replace(/(email|subject|body)\s*:/, '"$1":');
      });
      out = out.replace(/\"(email|subject|body)\"\s*:\s*'([^']*)'/g, '"$1":"$2"');
      out = out.replace(/,(\s*[}\]])/g, '$1');
      return out;
    };

    const candidate = sanitizeKeys(extractCandidate(raw));

    let parsed: unknown;
    try {
      parsed = JSON.parse(candidate);
    } catch (e) {
      return NextResponse.json(
        { error: "Model returned invalid JSON", raw, candidate, details: (e as Error).message },
        { status: 502 }
      );
    }

    const result = parsed as { email?: string; subject?: string; body?: string };
    if (!result || typeof result.email !== "string" || typeof result.subject !== "string" || typeof result.body !== "string") {
      return NextResponse.json(
        { error: "Parsed JSON missing required fields", raw, candidate },
        { status: 502 }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected server error", details: (err as Error).message },
      { status: 500 }
    );
  }
}