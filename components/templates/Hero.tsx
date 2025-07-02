
import Image from "next/image"
import CustomButton from "../modules/CustomButton"
import { TextGenerateEffect } from "../ui/TextGenerationEffect"

const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-5 relative z-0 
        max-w-[1440px] mx-auto">
            <div className="flex-1 pt-36 px-6 sm:px-16">
                <TextGenerateEffect 
                words="Find, book, rent a car — quick and super easy!"
                className="font-extrabold"/>
                <p className="font-light text-[27px] mt-5 text-black-100">
                    Streamline your car rental experience with our effortless booking process.   
                </p>
                <CustomButton title="Explore Cars" 
                buttonStyle="bg-primary-blue cursor-default text-white mt-10 rounded-full" />
            </div>

            <div className="flex xl:flex-[1.5] justify-end items-end 
            xl:h-screen w-full">
                <div className="relative z-0 xl:w-full w-[90%] h-[590px] xl:h-full">
                    <Image src='/hero.png' fill alt="hero" className="object-contain"/>
                </div>
                <div className="bg-hero-bg absolute 
                    xl:-top-24 xl:-right-1/2 -right-1/4 
                    bg-repeat-round -z-10 w-full xl:h-screen 
                    h-[590px] overflow-hidden"
                />
            </div>
        </div>
    )
}

export default Hero