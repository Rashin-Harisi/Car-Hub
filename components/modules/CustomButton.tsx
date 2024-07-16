import Image from "next/image";
import { MouseEventHandler } from "react";


const CustomButton = ({ title, buttonStyle, btnType, clickHandler,
  isDisabled, textStyles, rightIcon }:
  {
    title: string;
    buttonStyle?: string;
    btnType?: "button" | "submit";
    clickHandler?: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
    textStyles?: string;
    rightIcon?: string;
  }) => {
  return (
    <button className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${buttonStyle}`}
      type={btnType}
      onClick={clickHandler}
      disabled={isDisabled}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="arrow-left" fill className="object-contain"/>
        </div>
      )}
    </button>
  )
}

export default CustomButton