 "use client"

import { CiUser } from 'react-icons/ci';
import { IoMdLogOut } from "react-icons/io";
import { signOut } from 'next-auth/react';
import { redirect} from 'next/navigation';

const Navbar = ({session}:any) => {
    if (!session) redirect('/auth/signin')
  return (
    <div className='w-[200px] h-full bg-blue-50 flex flex-col relative'>
            <div className='pt-3 bg-primary-blue text-white rounded-lg h-[100px]'>
                <span className="text-4xl flex justify-center"><CiUser /></span>
                <p className='text-center mt-2'>{session?.user?.email}</p>
            </div>
            <button>User&apos;s Details</button>
            <button>Previous Purchase</button>
            <div className=" absolute bottom-0 w-full h-[50px] flex items-center justify-evenly cursor-pointer 
             bg-primary-blue text-white rounded-lg" onClick={()=>signOut()}>
                Log out 
                <IoMdLogOut />
            </div>

    </div>
  )
}

export default Navbar