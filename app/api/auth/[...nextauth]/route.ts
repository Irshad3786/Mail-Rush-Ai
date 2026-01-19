import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import  CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongoConn";
import { User } from "@/models/user";

export const authOptions:AuthOptions = {
  providers: [

    // ✅ GOOGLE LOGIN
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // ✅ EMAIL + PASSWORD LOGIN
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        await connectDB();

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("User not found");
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },



   callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        console.log("✅ GOOGLE USER DATA");

        console.log("📧 Email:", profile?.email);
        console.log("🧑 Name:", profile?.name);
        console.log("🆔 Google ID:", profile?.sub);
        console.log("FULL PROFILE 👉", profile);
        console.log("NORMALIZED USER 👉", user);
      }

      return true;
    },
  },


  pages: {
    signIn: "/signup",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };