"use client"
import React, { useState } from 'react'

function Result() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div className='bg-black min-h-screen w-full'>
      <nav className='flex justify-between  md:px-8 '>
          <h1 className="font-Roboto_Mono flex gap-1 text-sm md:text-lg text-white py-7 px-10"> <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-7 md:h-7' width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M19 14a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .118 1.844l-.118.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.118l-.048-.118l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.118-1.844l.118-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 19 14m3-7.032v7.522l-.032-.081l-.129-.379a3 3 0 0 0-5.61-.179l-.068.18l-.13.378a1 1 0 0 1-.516.58l-.106.043l-.379.129a3 3 0 0 0-1.404 4.673l.138.166H4a2 2 0 0 1-1.995-1.85L2 18V6.968l9.04 7.534a1.5 1.5 0 0 0 1.797.092l.123-.092zM20 4c.564 0 1.073.233 1.436.608l.116.13L12 12.698l-9.552-7.96a2 2 0 0 1 1.366-.73L4 4z"/></g></svg> Mailrush Ai </h1>


          <div className='flex items-center gap-2 px-6'>
            <h1 className='w-8 h-8 bg-amber-50 rounded-full'/>
            <h1 className='text-white max-w-full wrap-anywhere hidden sm:block '>Siva ram krishna nandumuri</h1>
          </div>

        </nav>


        <div className='flex items-center gap-4 pt-5 flex-wrap justify-end pr-14'>
                <label className='flex items-center gap-3 cursor-pointer'>
                  <span className='text-white font-bold'>Design Template</span>
                  <div 
                    onClick={() => setIsToggled(!isToggled)}
                    className={`relative w-14 h-7 rounded-full transition-colors ${isToggled ? 'bg-white' : 'bg-gray-400'}`}
                  >
                    <div 
                      className={`absolute top-1 left-1 w-5 h-5 bg-black rounded-full transition-transform ${isToggled ? 'translate-x-7' : 'translate-x-0'}`}
                    />
                  </div>
                </label>
              </div>


        <div className='flex justify-center items-center pt-14 font-Roboto_Mono py-11'>
          <div className='h-fit py-5 w-[80%]  bg-[#AA3BFF] rounded-3xl' >
            <div className='pl-4 pr-4 md:pl-14 pt-8'>
              <div className='flex  items-center flex-wrap gap-2'>
              <h1 className='font-bold'>Recipients</h1>
              <h1 className='bg-white py-3 px-2 rounded-4xl text-sm md:text-md w-full max-w-5xl'>Sumayabikezone@gmail.com, aha@gmail.com </h1>
              </div> 
              <div className='flex items-center gap-2 md:gap-9 pt-5 flex-wrap'>
              <h1 className='font-bold'>Subject</h1>
              <h1 className='bg-white py-3 px-2 rounded-4xl w-full max-w-5xl'>Application for Mern Stack</h1>
              </div>

              

              <div className='flex items-center gap-2 md:gap-16 pt-5 flex-wrap w-full '>
              <h1 className='font-bold'>Text</h1>
              <textarea 
                name="text" 
                id="emailText"
                placeholder="Enter your message here..."
                className='bg-white border rounded-4xl  border-gray-300  p-4 h-72 w-full md:w-full max-w-5xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 overflow-y-auto scrollbar-hide'
              />
              </div>


              

            </div> 

            


            <div className='flex justify-end pr-11 pt-6'>
              <button title='submit' className='bg-black text-white px-6 py-2 rounded-3xl flex justify-center items-center gap-2'>
                Send <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f0f0f0" fillRule="evenodd" d="M3.402 6.673c-.26-2.334 2.143-4.048 4.266-3.042l11.944 5.658c2.288 1.083 2.288 4.339 0 5.422L7.668 20.37c-2.123 1.006-4.525-.708-4.266-3.042L3.882 13H12a1 1 0 1 0 0-2H3.883z" clip-rule="evenodd"/></svg>
            </button>

            </div>
            

            
            
          </div>
        </div>

    </div>
  )
}

export default Result