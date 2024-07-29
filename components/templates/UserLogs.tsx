"user client"

import { useEffect, useState } from "react"
import { CarProps } from "./CarCard"
import LogCard from "./LogCard";

export interface logsProp{
    items:CarProps[];
    address: string;
    phone:string;
    note: string;
    createdAt: Date;
}

const UserLogs =  () => {
    const [logs,setLogs] = useState<logsProp[]>([])
    const [loading,setLoading] = useState(false)
    //console.log("logs", logs);
    useEffect(()=>{
        const fetchData= async()=>{
            setLoading(true)
            const res= await fetch('/api/log');
            const data= await res.json();
            setLogs(data.data)
            setLoading(false)
        }
        fetchData()
    },[])
   
    return (
        <div className="w-[90%] mx-auto">
        {loading ? 
        <p>Loading...</p>
       : (
        logs?.length ? (
          logs.map((log, index) => <LogCard key={index} data={log}/>)
        ) : (
          <p>No logs available.</p>
        )
      )}
        </div>
    )
}

export default UserLogs