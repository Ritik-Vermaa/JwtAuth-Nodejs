"use client"
import { isLogin, logOut } from '@/utils/auth'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const page = () => {

  const [user, setUser] = useState({ name: '', email: '' });
  const router = useRouter();

  useEffect(() => {
    const authenticate = async()=>{
      const loggedIn = await isLogin()

      if (loggedIn.auth) {
        setUser(loggedIn.data)
      }else{
       router.push("/login");
      }
    }

    authenticate()
  }, []);

  const handleLogout = () =>{
    logOut();
    toast.success("Logout Successfully")
    router.push('/login')
  }
  
  return (
    <>
   <main className=" w-full h-screen grid place-items-center">
    <div className=" p-4 bg-accentDark text-white w-[400px] h-[250px] text-center space-y-4">
      <p>Hi {user.name}, Welcome</p>
      <p>{user.email}</p>
      <button className=" bg-accent" onClick={handleLogout} >Logout</button>
    </div>
   </main>
   </>
  )
}

export default page