"use client"

interface Option {
    option: string;
  }
  
  interface OptionProps {
    options: Option[],
    activeDayIndex: any,
    setActiveDayIndex: any,
  }

export default function DisplaySelection({options, activeDayIndex, setActiveDayIndex}:OptionProps){

    return(
        <div className="flex overflow-x-scroll">
                {options.map((option, index) => (
                    <div
                    onClick={() => setActiveDayIndex(index)}
                    className={`border flex-none mr-3 mt-5 rounded-full font-light p-1 px-4 text-center 
                                ${
                                activeDayIndex === index
                                    ? "bg-primary text-white"
                                    : "hover:cursor-pointer"
                                }`}
                    key={index}
                    >
                    <p>{option.option}</p>
                    </div>
                ))}
                
            </div>
    )
}