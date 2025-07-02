"use client"
import { convertTimestampToDDMMYYYY } from "@/utils/functions";
import { useEffect, useState } from "react";


interface detailProps {
  make: string;
  model: string;
  price: number;
  quantity: number;
  total: number
}

const LogCard = ({ data }: any) => {
  const [details, setDetails] = useState<detailProps[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const newDetails = data.items.map((item:any) => ({
      make: item.make,
      model: item.model,
      price: +item.price,
      quantity: +item.quantity,
      total: +item.price * +item.quantity
    }));
    setDetails(newDetails)
    setLoading(false)
  }, [data])
  //console.log(details);
  const { address, note, phone } = data
  const date = convertTimestampToDDMMYYYY(data.createdAt)
  
  return (
    <div className="border border-dashed border-gray-500 mb-5 rounded-lg ">
      <div className="flex flex-col sm:flex-row justify-between px-5 h-[150px] sm:h-[50px] py-3 border border-b-gray-200">
        <p><span className="font-semibold">Address : </span>{address}</p>
        <p><span className="font-semibold">Phone : </span>{phone}</p>
        <p><span className="font-semibold">Date : </span>{date}</p>
      </div>
      {loading ? "Loading..." : (
        details?.length !== 0 ? (
          <div >{details.map((item, index) => (
            <div className="flex flex-col sm:flex-row pl-5 sm:pl-0 justify-around gap-5 w-[90%] mx-auto border border-gray-500 my-2" key={index}>
              <h2 className="capitalize"><span className="font-semibold">Model : </span>{item.make} {item.model}</h2>
              <p><span className="font-semibold">Duration : </span>{item.quantity} Day(s)</p>
              <p><span className="font-semibold">Price : </span>{item.total} €</p>
            </div>
          ))}</div>
        ) : null
      )}
      <p className="px-5"><span className="font-semibold">Note : </span>{note}</p>

    </div>
  )
}

export default LogCard