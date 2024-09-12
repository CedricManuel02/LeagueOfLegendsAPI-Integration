"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Navigation() {
    const router = useRouter();
    
    return (
        <div className="navbar bg-transparent absolute z-10  sm:px-2 md:px-4 lg:px-24 xl:px-28 2xl:px-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="font-semibold"><a href="#home">Home</a></li>
                        <li className="font-semibold"><a href="#about">About</a></li>
                    </ul>
                </div>
                <div className="hidden md:block">
                <div className="flex items-center gap-10">
                    <Image height={100} width={100} className="w-5 object-contain" src="https://seeklogo.com/images/L/league-of-legends-logo-13AAC5B212-seeklogo.com.png" alt="logo" />
                    <ul className="menu menu-horizontal px-1">
                        <li className="font-semibold"><a href="#home">Home</a></li>
                        <li className="font-semibold"><a href="#about">About</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline text-white" onClick={() => router.push("https://ko-fi.com/cedricmanuel")}>Buy me coffee</button>
            </div>
        </div>
    )
}
