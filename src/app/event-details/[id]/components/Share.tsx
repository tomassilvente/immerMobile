import SvgCopyLink from "../../../../../public/assets/Icons/CopyLink";
import SvgMagnify from "../../../../../public/assets/Icons/Magnify";

export default function share(){
    return(
        <div className="h-[60%] align-bottom bg-white">
            <p>Share to</p>
            <hr />
            <div className="flex">
                <div>
                    <SvgCopyLink />
                    <p>Copy Link</p>
                </div>
                <div>
                    <SvgCopyLink />
                    <p>Copy Link</p>
                </div>
                <div>
                    <SvgCopyLink />
                    <p>Copy Link</p>
                </div>
                <div>
                    <SvgCopyLink />
                    <p>Copy Link</p>
                </div>
            </div>
            <hr/>
            <div className="border flex rounded-3xl h-[40px] m-5 mr-8 mt-10 pl-[20px]">
                <SvgMagnify className="mt-2" width={15} height={20} />
                <input className="text-sm pl-5 w-[100%]" placeholder={'Search '} />
		    </div>
        </div>
)}

// ! This is only a momentary function, but it should be work diferently.
export async function getStaticPaths() {
    const eventIds = ["1", "2", "3"]; 

    const paths = eventIds.map((id) => ({
        params: { id: id.toString() },
    }));

    return { paths, fallback: true }; 
}