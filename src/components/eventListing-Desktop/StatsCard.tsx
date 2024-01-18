import SvgDecreace from "../../../public/assets/Icons/DecreaceIcon"
import SvgIncreace from "../../../public/assets/Icons/IncreaceIcon"

type StatsCard={
    description: string,
    quantity: string,
    upgrade: boolean | null,
    percentaje: number,
    period: boolean
}

export default function StatsCard ({ description, quantity, upgrade, percentaje, period }: StatsCard): JSX.Element {
    return (
        <div className="w-[18%] h-[150px]  rounded-xl bg-white shadow-sm ">
            <p className="font-light text-sm text-gray-500 py-4 ml-5">{description}</p>
            <p className={`${upgrade == null ? 'mt-3' : ''} text-center  text-3xl`}>{quantity}</p>
            <div className="pt-3 pb-1">
                {upgrade == null ? ''
                :upgrade
                ? 
                    <div className="flex justify-center items-center">
                        <SvgIncreace />
                        <p className="text-xs text-[#009971] ml-[5px]">{percentaje} %</p>
                    </div>
                :
                    <div className="flex justify-center items-center">
                        <SvgDecreace />
                        <p className="text-xs text-[#FD5839] ml-[5px] ">{percentaje} %</p>
                    </div>
                }
            </div>
            {
            period
            ? <p className="font-light text-gray-600 text-center text-xs"> vs previous period</p>
            : ''
            }
        </div>
    )}