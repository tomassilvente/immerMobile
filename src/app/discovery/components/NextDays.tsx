"use client"
import { useState } from "react";

export default function NextDays({Days}:any){
    const [isActive, setIsActive] = useState(false)

    function setActive(){
        setIsActive(!isActive)
    }
    return(
        <div className="flex overflow-x-scroll mt-5 pb-4">
                    {
                        Days.map(day =>(
                            <div    
                                onClick={setActive}
                                style={{
                                    backgroundColor:
                                    isActive
                                    ? '#FFD6B8'
                                    : '',
                                }}
                                className="border mr-3 shadow-lg hover:cursor-pointer rounded-md border-primary p-4 px-9 text-center text-lg">
                                <p>{day.day}</p>
                                <p className="text-sm">{day.number}</p>
                            </div>
                        ))
                    }
                </div>
    )
}