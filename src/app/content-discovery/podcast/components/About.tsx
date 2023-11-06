import SvgStar from "../../../../../public/assets/Icons/Star"

type AboutProps = {
    stars: number,
    category: string,
    about: string
}

export default function About({stars, category, about}:AboutProps){
    return(
        <>
        <div className="flex m-4 ">
            <div className={`border flex mr-3 rounded-full font-light p-1 pl-3 pr-4 text-center bg-primary text-white`}>
                <SvgStar /><p className="ml-1">{stars}</p>
            </div>
            <div className={`border flex-none mr-3 rounded-full font-light p-1 px-4 text-center bg-primary text-white`}>
                {category}
            </div>
        </div>
        <p className="font-light text-sm m-5">{about}</p>
        </>
    )
}