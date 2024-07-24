import Image from "next/image"
import CustomButton from "../modules/CustomButton"
import Link from "next/link"
import { footerLinks } from "@/constants"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { CgProfile } from "react-icons/cg";
import  "./Layout.css"
import Cart from "../templates/Cart";


const Layout = async ({ children }: { children: React.ReactNode }) => {

    const session = await getServerSession(authOptions);
    console.log(session);

    return (
        <div>
            <header>
                <div className="w-full z-10 absolute">
                    <nav className="flex justify-between items-center max-w-[1440px] 
                    mx-auto sm:px-16 px-6 py-4 bg-transparent"
                    >
                        <Link href='/' className="flex justify-center items-center">
                            <Image src="/logo.svg" alt="Logo"
                                width={118} height={18} className="object-contain" />
                        </Link>
                        {session ? (
                            <div className="logedin">
                                <Link href="/dashboard">
                                    <CgProfile />
                                </Link>
                                <Link href="/checkout">
                                    <Cart />
                                </Link>
                            </div>

                        ) : (
                            <Link href='/auth/signin'>
                                <CustomButton title='Sign in' btnType="button"
                                    buttonStyle="text-primary-blue 
                                bg-white min-w-[130px]"/>
                            </Link>
                        )}
                    </nav>
                </div>
            </header>
            <div className="min-h-[600px]">{children}</div>
            <footer className="flex flex-col border-t border-gray-100
                 text-black-100 mt-5">
                <div className="flex justify-between max-md:flex-col flex-wrap gap-5 sm:px-16 px-6 py-10">
                    <div className="flex flex-col justify-start items-start gap-5">
                        <Image src="/logo.svg" alt="Logo"
                            width={118} height={18} className="object-contain" />
                        <p className="text-base text-gray-700">
                            Carhub 2024 <br />
                            All Rights Reserved &copy;
                        </p>
                    </div>
                    <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
                        {footerLinks.map((link) => (
                            <div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px]">
                                <h3 className="font-bold">{link.title}</h3>
                                <div className="flex flex-col gap-5">
                                    {link.links.map((item) =>
                                    (<Link href={item.url} className="text-gray-500" key={item.title}>
                                        {item.title}
                                    </Link>))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                    <p>
                        &copy;CarHub.All rights reserved
                    </p>
                    <div className="flex flex-1 sm:justify-end justify-center max-sm:mt-4 gap-10">
                        <Link href='/' className="text-gray-500">Privacy&Policy</Link>
                        <Link href='/' className="text-gray-500">Terms&Condition</Link>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout