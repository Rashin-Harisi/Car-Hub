import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { CarProps } from "./CarCard";
import clsx from "clsx";
import Image from "next/image";
import { generateImageUrl } from "@/utils/rapidApi";


const CarDetails = ({ isOpen, closeModule, car }: {
    isOpen: boolean;
    closeModule: () => void;
    car: CarProps;
}) => {
    return (
        <>
            <Transition show={isOpen}>
                <Dialog as="div" className="relative z-10" onClose={closeModule}>
                    <TransitionChild>
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </TransitionChild>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full text-center items-center justify-center gap-4">
                            <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform 
                                   rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex 
                                   flex-col gap-5 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                                <button onClick={closeModule}
                                    type="button"
                                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full">
                                    <Image src='/close.svg' alt="close"
                                        width={20} height={20}
                                        className="object-contain" />
                                </button>
                                <div className="flex-1 flex flex-col gap-3">
                                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                        <Image src={generateImageUrl(car)} alt='car image' fill priority className="object-contain" />
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                            <Image src={generateImageUrl(car,"29")} alt='car image' fill priority className="object-contain" />
                                        </div>
                                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                            <Image src={generateImageUrl(car,"33")} alt='car image' fill priority className="object-contain" />
                                        </div>
                                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                            <Image src={generateImageUrl(car,"13")} alt='car image' fill priority className="object-contain" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <h2 className="capitalize text-xl font-semibold">
                                        {car.make} {car.model}
                                    </h2>
                                    <div className="mt-3 flex flex-col gap-4" >
                                        {Object.entries(car).map(([key,value])=>(
                                            <div key={key} className="flex justify-between w-full">
                                                <h4 className="capitalize text-gray-500">{key.split("_").join(" ")}</h4>
                                                <p className="text-black-100 font-semibold">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetails