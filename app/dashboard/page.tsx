"use client"
import React, { useRef, useState } from 'react'

function Dashboard() {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [input,setinput] = useState("")

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      const newHeight = Math.min(textareaRef.current.scrollHeight, 200)
      textareaRef.current.style.height = newHeight + 'px'
      
      // Enable scrolling if content exceeds max height
      if (textareaRef.current.scrollHeight > 200) {
        textareaRef.current.style.overflowY = 'scroll'
      } else {
        textareaRef.current.style.overflowY = 'hidden'
      }
    }
  }


  
  const handleFileClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setSelectedFiles(prev => [...prev, ...filesArray])
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }



  const generateEmail = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });

    const data = await res.json();

    console.log(data);
    setinput("")
    
  };


  


  return (
    <div className='w-full min-h-screen bg-black'>
      <div>
        <nav className='flex justify-between  md:px-8 '>
          <h1 className="font-Roboto_Mono flex gap-1 text-sm md:text-lg text-white py-7 px-10"> <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-7 md:h-7' width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M19 14a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .118 1.844l-.118.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.118l-.048-.118l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.118-1.844l.118-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 19 14m3-7.032v7.522l-.032-.081l-.129-.379a3 3 0 0 0-5.61-.179l-.068.18l-.13.378a1 1 0 0 1-.516.58l-.106.043l-.379.129a3 3 0 0 0-1.404 4.673l.138.166H4a2 2 0 0 1-1.995-1.85L2 18V6.968l9.04 7.534a1.5 1.5 0 0 0 1.797.092l.123-.092zM20 4c.564 0 1.073.233 1.436.608l.116.13L12 12.698l-9.552-7.96a2 2 0 0 1 1.366-.73L4 4z"/></g></svg> Mailrush Ai </h1>


          <div className='flex items-center gap-2 px-6'>
            <h1 className='w-8 h-8 bg-amber-50 rounded-full'/>
            <h1 className='text-white max-w-full wrap-anywhere hidden sm:block '>Siva ram krishna nandumuri</h1>
          </div>

        </nav>

        <div className='flex justify-center items-center px-5 h-96'>
          <div className='w-full max-w-xl'>
            <div className='relative'>
              <textarea 
                ref={textareaRef}
                placeholder='Generate Emails with MailRush Ai' 
                onInput={handleInput}
                value={input}
                className='bg-white px-3 w-full py-2 rounded-2xl focus:outline-none focus:ring-2 pl-12 pr-12 resize-none overflow-hidden  scrollbar-hide' 
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
                onChange={(e)=>{setinput(e.target.value)}}
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" className='absolute left-3 top-3' height="24" viewBox="0 0 24 24"><path fill="#939393" d="m9.96 9.137l.886-3.099c.332-1.16 1.976-1.16 2.308 0l.885 3.099a1.2 1.2 0 0 0 .824.824l3.099.885c1.16.332 1.16 1.976 0 2.308l-3.099.885a1.2 1.2 0 0 0-.824.824l-.885 3.099c-.332 1.16-1.976 1.16-2.308 0l-.885-3.099a1.2 1.2 0 0 0-.824-.824l-3.099-.885c-1.16-.332-1.16-1.976 0-2.308l3.099-.885a1.2 1.2 0 0 0 .824-.824m8.143 7.37c.289-.843 1.504-.844 1.792 0l.026.087l.296 1.188l1.188.297c.96.24.96 1.602 0 1.842l-1.188.297l-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188l-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297l.297-1.188zm.896 2.29a1 1 0 0 1-.203.203a1 1 0 0 1 .203.203a1 1 0 0 1 .203-.203a1 1 0 0 1-.203-.204M4.104 2.506c.298-.871 1.585-.842 1.818.087l.296 1.188l1.188.297c.96.24.96 1.602 0 1.842l-1.188.297l-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188l-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297l.297-1.188zM5 4.797a1 1 0 0 1-.203.202A1 1 0 0 1 5 5.203a1 1 0 0 1 .203-.204A1 1 0 0 1 5 4.796"/></svg>
              
              <button title='fileupload' onClick={handleFileClick} className='absolute right-3 top-3 cursor-pointer hover:opacity-70 transition-opacity'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path fill="#939393" fillRule="evenodd" d="M8 4a3 3 0 0 0-3 3v4a5 5 0 0 0 10 0V7a1 1 0 1 1 2 0v4a7 7 0 1 1-14 0V7a5 5 0 0 1 10 0v4a3 3 0 1 1-6 0V7a1 1 0 0 1 2 0v4a1 1 0 1 0 2 0V7a3 3 0 0 0-3-3" clipRule="evenodd"/>
                </svg>
              </button>
              
              <input
                ref={fileInputRef}
                type="file"
                placeholder='upload'
                multiple
                accept="image/*,.pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {selectedFiles.length > 0 && (
              <div className='mt-3 space-y-2'>
                {selectedFiles.map((file, index) => (
                  <div key={index} className='flex items-center justify-between bg-white/10 px-4 py-2 rounded-lg'>
                    <div className='flex items-center gap-2 text-white text-sm'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                        <path fill="#939393" fillRule="evenodd" d="M8 4a3 3 0 0 0-3 3v4a5 5 0 0 0 10 0V7a1 1 0 1 1 2 0v4a7 7 0 1 1-14 0V7a5 5 0 0 1 10 0v4a3 3 0 1 1-6 0V7a1 1 0 0 1 2 0v4a1 1 0 1 0 2 0V7a3 3 0 0 0-3-3" clipRule="evenodd"/>
                      </svg>
                      <span className='truncate max-w-xs'>{file.name}</span>
                      <span className='text-gray-400 text-xs'>({(file.size / 1024).toFixed(1)} KB)</span>
                    </div>
                    <button 
                      onClick={() => removeFile(index)}
                      className='text-red-400 hover:text-red-300 text-sm ml-2'
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className='flex justify-center items-center pt-2 '>
              <button onClick={generateEmail} className='bg-[#AA3BFF] flex justify-center items-center gap-2 px-10 py-2 rounded-2xl cursor-pointer font-Roboto_Mono font-bold'>Generate <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM6 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm5.412 2.4a.632.632 0 0 1 1.176 0l.316.763a5.46 5.46 0 0 0 2.815 2.908l.896.399c.513.228.514.975 0 1.204l-.95.422a5.45 5.45 0 0 0-2.773 2.813l-.308.707a.633.633 0 0 1-1.168 0l-.308-.707a5.45 5.45 0 0 0-2.773-2.813l-.95-.422c-.513-.229-.513-.976 0-1.204l.896-.399a5.46 5.46 0 0 0 2.814-2.908z"/></svg></button>
            
            </div>
          </div>
        </div>


        <div>
          <h1 className='text-center text-white font-Roboto_Mono text-2xl '>Top Templates</h1>

          <div className='flex justify-center items-center gap-8 w-full py-8 flex-wrap'>
            <div className='w-72 h-56 bg-white rounded-3xl'></div>
            <div className='w-72 h-56 bg-white rounded-3xl'></div>
            <div className='w-72 h-56 bg-white rounded-3xl'></div>
            <div className='w-72 h-56 bg-white rounded-3xl'></div>
          </div>
        </div>

        

        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard