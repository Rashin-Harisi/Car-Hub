"user client"

import { useEffect, useState } from "react"
import { CarProps } from "./CarCard"
import LogCard from "./LogCard";

export interface logsProp {
  items: CarProps[];
  address: string;
  phone: string;
  note: string;
  createdAt: Date;
}

const UserLogs = () => {
  const [logs, setLogs] = useState<logsProp[]>([])
  const [loading, setLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(logs?.length / 2);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await fetch('/api/log');
      const data = await res.json();
      setLogs(data.data)
      setLoading(false)
    }
    fetchData()
  }, [])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-[90%] mx-auto">
      {loading ?
        <p>Loading...</p>
        : (
          logs?.length ? (
            <>
              <div>{(logs.slice(2*currentPage-2,2*currentPage)).map((log, index) => <LogCard key={index} data={log} />)}</div>
              <div className="w-fit mx-auto mt-[100px]">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`w-7 h-7 rounded-full  ${currentPage === index + 1 ? 'bg-white text-black' : 'bg-blue-500 text-white'}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p>No logs available.</p>
          )
        )}
    </div>
  )
}

export default UserLogs




