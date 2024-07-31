import Link from "next/link"


const Alert = ({data}:{data:string}) => {
  return (
    <div>
        <p className='text-lg font-bold text-center pt-10'>{data}</p>
        <Link href='/dashboard' className="text-blue-500 italic underline flex justify-center">here</Link>
    </div>
  )
}

export default Alert