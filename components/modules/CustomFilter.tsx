"use client";

import { updateSearchParams } from '@/utils/functions';
import './CustomFilter.css'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  reset: boolean;
}
interface OptionProps {
  title: string;
  value: string;
}



const CustomFilter = ({ title, options, reset }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router= useRouter();
  useEffect(()=>{
    if(reset){
      setSelected(options[0])
    }
  },[reset])

  const handleUpdateParams= (e: {title:string;value:string})=>{
    const newPath= updateSearchParams(title,e.value.toLowerCase());
    router.push(newPath);
  }
  return (
    <div className='w-fit mr-2'>
      <Listbox value={selected} onChange={
        (e)=>{
          setSelected(e);
          handleUpdateParams(e);
        }
      }>
        <div className='relative w-fit z-10'>
          <ListboxButton className="listButton">
            <span className='block truncate'>{selected.title}</span>
            <Image src='/chevron-up-down.svg' width={20} height={20} 
              alt='chevron-up-down' className='ml-4 object-contain'/>
          </ListboxButton>
          <ListboxOptions className="options">
            {options.map((option) => (
                <ListboxOption value={option} key={option.title} 
                  className="group relative cursor-default select-none py-2 px-4
                    data-[active]:bg-primary-blue data-[active]:text-white text-gray-900"
                  >
                  <span className='block truncate font-normal group-data-[selected]:font-bold'>
                    {option.title}
                  </span>
                </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter