import HomeScreenHeader from "./components/HomeScreenHeader"
import Subscriptions from "./components/Subscriptions"
import HomePageRecommended from "./components/HomePageRecommended"
import DemoData from "../../../public/data/DemoData.json"
import SinglePost from "./components/SinglePost"
import NewEvents from "./components/NewEvents"
import EventsNear from "./components/EventsNear"

const location = 'New York City, USA'


export default function homePage(){ 
    return (
        <div className="h-screen bg-white text-black sm:invisible overflow-scroll">
            <HomeScreenHeader location={location}/>
            <Subscriptions stories={DemoData.stories} />
            <HomePageRecommended />
            <hr />
            <SinglePost profilePic={DemoData.post.profilePic} eventOrganizer={DemoData.post.username} postLocation={DemoData.post.postLocation} postDate={DemoData.post.postDate} post={DemoData.post.post} postLikes={DemoData.post.postLikes} postComments={DemoData.post.postComments} postShareds={DemoData.post.postShareds}/>
            <hr />
            <NewEvents />
            <EventsNear />
        </div>
)}