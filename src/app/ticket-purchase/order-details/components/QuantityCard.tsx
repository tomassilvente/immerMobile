"use client"

import { useState } from "react";
import SvgLessButton from "../../../../../public/assets/Icons/LessButton";

export default function QuantityCard({price}:any){

    const [quant, setQuant] = useState(1)

    function less(){
        if(quant>1) setQuant(quant - 1)
    }
    function plus(){
        if(quant<6) setQuant(quant + 1)
    }

    return(
        <div className="border shadow-lg m-4 my-16 px-4 py-8 grid grid-cols-2 rounded-md"> 
            <div>
                <p className="text-xl font-semibold">Ticket Quantity</p>
                <p className="text-primary text-xl font-semibold mt-2">${price * quant}  <span className="text-sm font-light">+ Fees</span></p>
            </div>
            <div className="ml-20 mt-3 flex">
                <SvgLessButton onClick={less}/>
                <p className="text-2xl mx-10">{quant}</p>
                <SvgLessButton onClick={plus}/>
            </div>
        </div>
    )
}