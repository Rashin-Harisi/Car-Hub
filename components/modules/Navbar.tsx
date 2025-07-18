 "use client"

import { CiUser } from 'react-icons/ci';
import { IoMdLogOut } from "react-icons/io";
import { signOut } from 'next-auth/react';
import { redirect} from 'next/navigation';


interface NavbarProps{
  session:any;
  activeIndex:number;
  setActiveIndex:(activeIndex:number)=>void
}
const Navbar = ({session,activeIndex,setActiveIndex}:NavbarProps) => {
  
    if (!session) redirect('/auth/signin')

  const handleClick =(index:any)=>{
    setActiveIndex(index)
  }
  return (
    <div className='w-[80%] mx-auto sm:w-[200px] sm:h-[350px] bg-blue-50 relative flex flex-col'>
            <div className='pt-3 bg-primary-blue text-white rounded-lg h-[100px]'>
                <span className="text-4xl flex justify-center"><CiUser /></span>
                <p className='text-center mt-2'>{session?.user?.email}</p>
            </div>
            <ul className='flex h-[150px] justify-around sm:flex-col'>
              <li className={`h-[50px] flex justify-center items-center text-center rounded-lg cursor-pointer mt-5 ${activeIndex === 0 ?"bg-primary-blue text-white" :""} `} onClick={()=>handleClick(0)}>User&apos;s Details</li>
              <li className={`h-[50px] flex justify-center items-center text-center rounded-lg cursor-pointer mt-5 ${activeIndex === 1 ?"bg-primary-blue text-white" :""} `} onClick={()=>handleClick(1)}>Previous Purchase</li>

            </ul>
            <div className=" absolute bottom-0 w-full h-[50px] flex items-center justify-evenly cursor-pointer 
             bg-primary-blue text-white rounded-lg" onClick={()=>signOut()}>
                Log out 
                <IoMdLogOut />
            </div>

    </div>
  )
}

export default Navbar