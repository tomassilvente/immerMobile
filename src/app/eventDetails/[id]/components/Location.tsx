import Image from "next/image"

export default function Location ({eventLocation}:any){
    return (
        <div className="p-5">
                <h1 className="text-2xl my-4">Location</h1>
                <div className="flex">
                    <Image alt={'...'}  src={'../../assets/mobile/mobile-icons/location.svg'} width={24} height={24}/>
                    <p className="ml-4 font-light"> {eventLocation} </p>
                </div>
                {/* We need this API_KEY to get google maps working */}
                <iframe
                    className="mt-6"
                    width={"100%"}
                    height="230"
                    style={{border:"0"}}
                    loading="lazy"
                    src="https://www.google.com/maps/embed/v1/place?key=API_KEY
                        &q=Space+Needle,Seattle+WA">
                    </iframe>
            </div>
    )
}