"use client"
import { useEffect, useState } from 'react'
import './UserDetails.css'
import { imageBase64 } from '@/utils/functions'
import Image from 'next/image'
import { IUser } from '@/models/User'
import { useRouter } from 'next/navigation'



const UserDetails = () => {
  const [info, setInfo] = useState<IUser[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userFetch = async () => {
      const res = await fetch('/api/user')
      const data = await res.json();
      setInfo(data.data)
      setLoading(false)
    }
    userFetch()
  }, [])




  return (
    <>
      {loading ? "Loading..." : (info.name ? <UserDetailsForm info={info} /> : <UserDetailsRawForm />)}
    </>
  )
}

export default UserDetails




export const UserDetailsForm = ({ info }: IUser[]) => {
  return (
    <div className="w-[90%] mx-auto flex flex-col">
      <h2 className='font-semibold text-center text-xl mb-7'>User information</h2>
      <div className="w-[90%] mx-auto">
        <div className="title h-[200px]" >
          <p className="info">Driving License </p>
          <div className='h-[190px] object-contain relative w-full my-auto'>
            <Image src={info.license} className="object-contain" fill alt="license" />
          </div>

        </div>
        <div className="title h-[200px]">
          <p className="info">Picture </p>
          <div className='h-[190px] object-contain relative w-full my-auto'>
            <Image src={info.picture} className="object-contain" fill alt="license" />
          </div>
        </div>
        <div className="title">
          <p className="info">Full Name : </p>
          <p>{info.name}</p>
        </div>
        <div className="title">
          <p className="info">Living Address </p>
          <p>{info.address}</p>
        </div>
        <div className="title">
          <p className="info">Phone </p>
          <p>{info.phone}</p>
        </div>
      </div>
    </div>
  )
}




export const UserDetailsRawForm = () => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [license, setLicense] = useState("")
  const [picture, setPicture] = useState("")
  const router = useRouter();
  //console.log(router);

  const submitHandler = async () => {
    const res = await fetch('/api/user', {
      method: "PATCH",
      body: JSON.stringify({ name, phone, address, license, picture }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    const data = await res.json()
    console.log(data);
    router.refresh()
  }
  const uploadLicense = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const image  = await imageBase64(file)
      setLicense(image)
    }
  }
  const uploadPicture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const image = await imageBase64(file)
      setPicture(image)
    }
  }
  return (
    <div className="w-[90%] mx-auto flex flex-col">
      <h2 className='font-semibold text-center text-xl mb-7'>Please complete required information</h2>
      <div className="w-[90%] mx-auto">
        <div className={`title ${license ? "h-[200px]" : "h-[50px]"}`}>
          <p className="info">Driving License </p>
          {license ? (<div className='h-[190px] object-contain relative w-full my-auto'>
            <Image src={license} className="object-contain" fill alt="license" />
          </div>) : (
            <div className='my-auto'>
              <input type="file" onChange={uploadLicense} />
            </div>
          )}
        </div>
        <div className={`title ${picture

          ? "h-[200px]" : "h-[50px]"}`}>
          <p className="info">Picture </p>
          <div className='my-auto'>
            {picture ? (<div className='h-[190px] object-contain relative w-full my-auto'>
              <Image src={picture} className="object-contain" fill alt="license" />
            </div>) : (
              <div className='my-auto'>
                <input type="file" onChange={uploadPicture} />
              </div>
            )}
          </div>
        </div>
        <div className="title">
          <p className="info">Full Name </p>
          <input type="text" placeholder='Please enter your full name' onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="title">
          <p className="info">Living Address </p>
          <input type="text" placeholder='Please enter your living address' onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="title">
          <p className="info">Phone </p>
          <input type="text" placeholder='Please enter your phone number' onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
      <button type='submit' onClick={submitHandler} className='bg-primary-blue text-white w-[200px] mx-auto h-[30px] rounded-lg mt-5'>Submit</button>
    </div>
  )
}