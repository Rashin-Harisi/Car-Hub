"use client"

import { calculateCarRent } from "@/utils/functions";
import Image from "next/image";
import { useState } from "react";
import './CarCard.css';
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
import { generateImageUrl } from "@/utils/rapidApi";

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
interface carCardProps {
    car: CarProps
}
const CarCard = ({ car }: carCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const [isOpen, setIsOpen] = useState(false)
    const carRent = calculateCarRent(city_mpg, year);
    return (
        <div className="carCard group">
            <div className="content">
                <h2>{make} {model}</h2>
            </div>
            <p className="price">
                <span className="self-start text-[14px] leading-[17px] font-semibold">€</span>
                {carRent}
                <span className="self-end text-[14px] leading-[17px] font-medium">/day</span>
            </p>
            <div className="imageContainer">
                <Image src={generateImageUrl(car)} alt='car image' fill priority className="object-contain" />
            </div>
            <div className="relative w-full flex ">
                <div className="detailContainer">
                    <div className="detailContainer_subContainer">
                        <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                        <p>{transmission === "a" ? "Automatic" : "Manual"}</p>
                    </div>
                    <div className="detailContainer_subContainer">
                        <Image src='/tire.svg' width={20} height={20} alt='tire' />
                        <p>{drive.toUpperCase()}</p>
                    </div>
                    <div className="detailContainer_subContainer">
                        <Image src='/gas.svg' width={20} height={20} alt='gas' />
                        <p>{city_mpg} MPG</p>
                    </div>
                </div>
                <div className="viewButton">
                    <CustomButton title="View More"
                        clickHandler={() => setIsOpen(true)}
                        buttonStyle="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                    />
                </div>
            </div>
            <CarDetails 
                isOpen={isOpen} 
                closeModule={()=>setIsOpen(false)} 
                car={car}
            />
        </div>
    )
}

export default CarCard