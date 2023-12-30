"use client"
import React from 'react'
import Link from 'next/link';


const SignUp = () => {
    return (
        <>
            <div
                className="grid grid-cols-[30%,1fr]"
            >
                <div className="bg-accent h-screen grid place-items-center">
                    <div className="text-center w-full text-white space-y-8">
                        <h2 className="font-bold text-4xl">Welcome Back!</h2>
                        <div className="text-[#eeeeee] w-fit mx-auto">
                            <p>To keep connected with us please</p>
                            <p>please login with your personal info</p>

                            <Link href="/login">
                                <button className="uppercase px-4 py-2 w-[100%] rounded-full border-2 mt-8">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=' h-screen grid place-items-center'>
                    <div className=' text-center'>
                        <h1 className='text-accent font-bold text-4xl'>Create Account</h1>
                        <div className=' flex items-center gap-4 pt-8 mx-auto'>
                            <div className='icons_w'></div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SignUp