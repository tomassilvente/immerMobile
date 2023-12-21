import Link from 'next/link';

function Settings({openSettings}:any){

    return(
        <div className="h-[50%] align-bottom absolute bottom-0 bg-white w-full overflow-x-hidden">
            <div onClick={openSettings} className="w-[26px] h-[3px] rounded-[2.5px] bg-[#ABABAB] mx-auto my-[16px]"></div>
            <div className='grid  text-xl font-light w-[100%] m-5'>
                <Link className='ml-[100px]' href='/'>Description</Link>
                <hr className='my-4'/>
                <Link className='ml-[100px]'  href='/'>Add to watchlist</Link>
                <hr className='my-4'/>
                <Link className='ml-[100px]'  href='/'>Don't show me this channel</Link>
                <hr className='my-4'/>
                <Link className='ml-[100px]'  href='/'>Report</Link>
                <hr className='my-4'/>
                <Link className='ml-[100px]'  href='/'>Help & Feedback</Link>
            </div>
        </div>
)}
export default Settings;