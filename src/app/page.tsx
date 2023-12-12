import React from 'react'
import HomeScreenHeader from '../components/Home/HomeScreenHeader'
import Subscriptions from '../components/Home/Subscriptions'
import HomePageRecommended from '../components/Home/HomePageRecommended'
import DemoData from '../../public/data/DemoData.json'
import SinglePost from '../components/Home/SinglePost'
import NewEvents from '../components/Home/NewEvents'
import EventsNear from '../components/Home/EventsNear'
import { MobileLayout } from '../components/MobileLayout'
import { getEvents } from '../server-actions/events/getEvents'

const location = 'New York City, USA'

export default function HomePage (): JSX.Element {
  async function getTheEvents (): Promise<void> {
    try {
      // ! This is not correct, fix later
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      const events = await getEvents()
      console.log(events)
    } catch (error) {
      console.error(error)
    }
  }

  void getTheEvents()

  return (
    <MobileLayout>
    {/* <div className="h-screen bg-white text-black sm:invisible overflow-scroll"> */}
      <HomeScreenHeader location={location} />
      <Subscriptions stories={DemoData.stories} />
      <HomePageRecommended />
      <hr />
      <SinglePost
        profilePic={DemoData.post.profilePic}
        eventOrganizer={DemoData.post.username}
        postLocation={DemoData.post.postLocation}
        postDate={DemoData.post.postDate}
        post={DemoData.post.post}
        postLikes={DemoData.post.postLikes}
        postComments={DemoData.post.postComments}
        postShareds={DemoData.post.postShareds}
      />
      <hr />
      <NewEvents />
      <EventsNear />
    {/* </div> */}
    </MobileLayout>
  )
}
