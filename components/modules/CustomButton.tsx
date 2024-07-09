
const CustomButton = ({title, buttonStyle,btnType}:
  {title:string;
    buttonStyle?:string;
    btnType?: "button"| "submit"
  }) => {
  return (
    <button className={`inline-block
      rounded-full flex-row relative justify-center items-center 
      py-3 px-6 outline-none ${buttonStyle}`} type={btnType}>
      {title}
    </button>
  )
}

export default CustomButton