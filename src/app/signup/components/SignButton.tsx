type ButtonProps ={
    title: string,
    able: boolean,
    onClick: any
}

export default function SignButton({title, able, onClick}: ButtonProps){
    return(
        <div>
        {
            able
            ? <div
                onClick={onClick}
                className="w-[100%] text-center text-2xl bg-primary text-white mt-12  py-5 rounded-full" 
            >
                {title}
            </div>  
            :
            <div
                className="w-[100%] text-center text-2xl bg-[#b8b8b8] text-white mt-12  py-5 rounded-full" 
            >
                {title}
            </div> 
        }
        </div>
    )
}