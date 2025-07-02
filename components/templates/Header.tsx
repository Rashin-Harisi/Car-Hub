"use client"
import Image from 'next/image'
import Link from 'next/link'
import { CgProfile } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import Cart from "../templates/Cart";
import "./Header.css"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';


const Header = ({data}:any) => {
    
   const {data:session} = useSession();
   const isUser = !!session?.user
   console.log(isUser);


  return (
    <header>
    <div className="w-full z-10 absolute">
        <nav className="flex justify-between items-center max-w-[1440px] 
        mx-auto sm:px-16 px-6 py-4 bg-transparent"
        >
            <Link href='/' className="flex justify-center items-center">
                <Image src="/logo.svg" alt="Logo"
                    width={118} height={18} className="object-contain" />
            </Link>
            {isUser || data ? (
                <div className="logedin">
                    <Link href="/dashboard">
                        <CgProfile />
                    </Link>
                    <Link href="/checkout">
                        <Cart />
                    </Link>
                </div>

            ) : (
                <div className="logedin"> 
                    <Link href='/auth/signin'>
                        <IoMdLogIn />
                    </Link>
                    <Link href="/checkout">
                        <Cart />
                    </Link>
                </div>
            )}
        </nav>
    </div>
</header>
  )
}

export default Header