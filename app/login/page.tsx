"use client"
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

function Login() {

   const [error, setError] = useState("")
  const [user,setuser] = useState({
      email:"",
      password:""
    })


    const handleGoogleAuth = ()=>{
      signIn("google", {callbackUrl:"/dashboard"})
      
    }
  
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setError("")
        
          await signIn("credentials", {
            email:user.email,
            password:user.password,
            callbackUrl: "/dashboard",
          })
          
        // if (result?.error) {
        //   setError(result.error)
        // } else if (result?.ok) {
        //   window.location.href = "/dashboard"
        // }
      }
  return (
    <div className='min-h-screen w-full bg-black'> 
        
      <div>
        <h1 className="font-Roboto_Mono flex gap-1 text-sm md:text-lg text-white py-7 px-10"> <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-7 md:h-7' width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M19 14a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .118 1.844l-.118.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.118l-.048-.118l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.118-1.844l.118-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 19 14m3-7.032v7.522l-.032-.081l-.129-.379a3 3 0 0 0-5.61-.179l-.068.18l-.13.378a1 1 0 0 1-.516.58l-.106.043l-.379.129a3 3 0 0 0-1.404 4.673l.138.166H4a2 2 0 0 1-1.995-1.85L2 18V6.968l9.04 7.534a1.5 1.5 0 0 0 1.797.092l.123-.092zM20 4c.564 0 1.073.233 1.436.608l.116.13L12 12.698l-9.552-7.96a2 2 0 0 1 1.366-.73L4 4z"/></g></svg> Mailrush Ai </h1>
      </div>

      <div className='flex justify-center items-center px-3  font-Roboto_Mono'>
        <div className='md:h-132 h-134 md:w-1/3 w-[80%] sm:w-[60%] bg-[#AA3BFF] rounded-3xl '>
          <h1 className='font-Roboto_Mono text-black text-center pt-6 font-bold md:text-2xl'>
            Sign In
          </h1>

          <form onSubmit={handleSubmit}>

            
            <div className="flex flex-col  gap-1 pt-3">
            <label htmlFor="email" className="ml-[10%] text-sm font-medium">
              Email
            </label>

            <div className="relative w-[80%] mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={(e)=>{setuser({...user,email:e.target.value})}}
                placeholder="Enter your Email"
                className="bg-white py-2 pl-10 pr-2 rounded-xl w-full"
              />
            </div>
            
            </div>

            <div className="flex flex-col  gap-1 pt-3">
            <label htmlFor="password" className="ml-[10%] text-sm font-medium">
              Password
            </label>

            <div className="relative w-[80%] mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M2 19v-2h20v2zm1.15-6.05l-1.3-.75l.85-1.5H1V9.2h1.7l-.85-1.45L3.15 7L4 8.45L4.85 7l1.3.75L5.3 9.2H7v1.5H5.3l.85 1.5l-1.3.75l-.85-1.5zm8 0l-1.3-.75l.85-1.5H9V9.2h1.7l-.85-1.45l1.3-.75l.85 1.45l.85-1.45l1.3.75l-.85 1.45H15v1.5h-1.7l.85 1.5l-1.3.75l-.85-1.5zm8 0l-1.3-.75l.85-1.5H17V9.2h1.7l-.85-1.45l1.3-.75l.85 1.45l.85-1.45l1.3.75l-.85 1.45H23v1.5h-1.7l.85 1.5l-1.3.75l-.85-1.5z"/></svg>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
                value={user.password}
                className="bg-white py-2 pl-10 pr-2 rounded-xl w-full"
                onChange={(e)=>{setuser({...user,password:e.target.value})}}
              />
            </div>
            
            </div>

          <h1 className='text-end  w-[80%] mx-auto text-sm pt-2 font-bold pb-4 hover:text-white cursor-pointer'>Forgor password ?</h1>
          
          <div className='flex'>

          
           <button  type='submit' className='bg-black w-[50%] mx-auto py-2 rounded-4xl text-white text-center '>
            Signin
          </button>
          </div>

          </form>

          <div className=' w-[50%] mx-auto py-2 rounded-4xl text-white text-center '>
           Dont have an account ? <Link href={"/createaccount"}><span className='text-black font-extrabold underline hover:text-white cursor-pointer'>Create Account</span> </Link>
          </div>
          
          <div className='flex justify-center items-center py-4'>
            <hr className="border-black border w-28"></hr>
            <h1 className='text-xl text-black px-2'>or</h1>
            <hr className="border-black border w-28"></hr>
          </div>

          <div>
            <div onClick={handleGoogleAuth} className='flex justify-center items-center gap-2 bg-black text-white py-2  w-[60%] mx-auto rounded-2xl'>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><g fill="none" fillRule="evenodd" clipRule="evenodd"><path fill="#f44336" d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86" opacity="0.987"/><path fill="#ffc107" d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92" opacity="0.997"/><path fill="#448aff" d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49" opacity="0.999"/><path fill="#43a047" d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z" opacity="0.993"/></g></svg> <h1>Continue with google</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login 