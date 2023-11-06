import { MobileLayout } from "../../../../components/MobileLayout";
import SingleHeader from "../components/SingleHeader";

export default function SingleEpisode(){
    return(
        <MobileLayout>
            <SingleHeader eventTitle='Brooks Davis' releaseDay='Oct 3' duration={45} eventImg={'../../assets/Vert3.png'}/>
            <p className="font-light m-5 text-gray-600">Lorem ipsum dolor sit amet consectetur. Euismod non arcu malesuada pharetra nulla eu ut aliquam. Dui purus risus arcu at ac tristique purus. Adipiscing pretium vel pellentesque lectus semper aliquam quis velit. Risus suspendisse gravida felis eget enim ultricies ullamcorper massa. Ultrices nulla id eget vel diam senectus tempus tristique. Viverra at nisl magna mauris neque leo donec.</p>
        </MobileLayout>
    )
}