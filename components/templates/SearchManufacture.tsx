/* eslint-disable react/no-unescaped-entities */
"use client"
import { manufacturers } from "@/constants";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";


const SearchManufacture = ({ manufacture, setManufacture }: {
    manufacture: string;
    setManufacture: (manufacture: string) => void;
}) => {
    const [query, setQuery] = useState("")
    const filteredManufacture = query === ""
        ? manufacturers
        : manufacturers.filter((item) =>
        (item.toLowerCase().replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))))
    return (
        <div className="flex-1 w-full flex justify-start items-center relative">
            <Combobox value={manufacture} onChange={setManufacture}>
                <div className="relative w-full">
                    <ComboboxButton className="absolute top-[14px]">
                        <Image src='/car-logo.svg' width={20}
                            height={20} alt='carLogo' className="ml-4" />
                    </ComboboxButton>
                    <ComboboxInput placeholder="Volkswagen..."
                        className={clsx("rounded-lg pl-12 p-4 border w-full h-[48px]",
                             "outline-none focus:outline-gray-200 bg-light-white", 
                             "cursor-pointer text-sm ")}
                        displayValue={(manufacture: string) => manufacture}
                        onChange={(e) => setQuery(e.target.value)} />
                </div>
                <Transition>
                    <div className={clsx([
                        "transition ease-in duration-100",
                        "data-[enter]:opacity-100",
                        "data-[closed]:opacity-0",
                        `data-[leave]:${()=> setQuery("") }`
                    ])}>
                        <ComboboxOptions transition className={clsx(
                            "absolute left-10 top-10 w-[250px] md:w-[190px] mt-1 max-h-60 z-10 overflow-auto rounded-md bg-white py-1 text-base shadow-lg", 
                            "ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm")}>
                            {filteredManufacture.length === 0 && query !== "" ?
                                    <ComboboxOption className="relative cursor-default select-none py-2 pl-10 pr-4" value="Can't find your desire name">
                                        Can't find your desire name
                                    </ComboboxOption> 
                                    :  filteredManufacture.map((item) => (
                                        <ComboboxOption key={item} value={item}
                                            className="data-[focus]:bg-primary-blue data-[focus]:text-white text-gray-900 cursor-default select-none py-2 pl-10 pr-4"
                                        >
                                            {item}
                                        </ComboboxOption>
                                    ))
                            }
                        </ComboboxOptions>
                    </div>
                </Transition>
            </Combobox>
        </div>
    )
}

export default SearchManufacture