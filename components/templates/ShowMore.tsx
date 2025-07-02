"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import CustomButton from '../modules/CustomButton';
import { updateSearchParams } from '@/utils/functions';

interface ShowMoreProps{
    pageNumber: number;
    isNext: boolean;
}
const ShowMore = ({pageNumber,isNext}: ShowMoreProps) => {
    const router= useRouter();
    const handleNavigation= ()=>{
        const newLimit = (pageNumber + 1) * 10;
        const newPath = updateSearchParams("limit", `${newLimit}`);
        router.push(newPath)
    }
    
  return (
    <div className='w-full flex justify-center gap-5 mt-10'>
        {!isNext && (
            <CustomButton title="Show More" btnType="button"
            clickHandler={handleNavigation} 
            buttonStyle="bg-primary-blue rounded-full text-white" />
        )}
    </div>
  )
}

export default ShowMore