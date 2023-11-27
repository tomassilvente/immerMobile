import { MobileLayout } from "../../../components/MobileLayout"
import Link from "next/link";
import BackButton from "../../../common/buttons/BackButton";
import CommentInput from "../components/CommentInput";
import Submit from "../components/Submit";
import { Inter } from "next/font/google";
const inter = Inter({weight:"400", subsets:["latin"]});
const PostComment = () =>{
    return (
        <MobileLayout className={inter.className}>
            <div className="relative flex px-[14px] gap-5 items-center py-5">
                <Link href="" className="action-button">
                    <BackButton />
                </Link>
                <h1 className="font-bold text-xl">Comment</h1>
            </div>
            <div className="py-2.5 px-8 flex gap-2.5 flex-col">
                <div className="py-2.5">
                    <h3 className="font-bold">
                        Tell us how can we Improve
                    </h3>
                    <p className="mt-2.5 text-sm text-gray-500">
                        Want to submit queries or report an issue? <br /> Send us a message
                    </p>
                </div>
                <CommentInput placeholder={"Your Name*"}/>
                <CommentInput placeholder={"Your Email*"}/>
                <CommentInput placeholder={"Reason*"}/>
                <CommentInput placeholder={"Message*"}/>
                <Submit/>
            </div>
        </MobileLayout>
    )
}

export default PostComment;