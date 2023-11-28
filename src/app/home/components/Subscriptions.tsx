"use client";
import Image from "next/image";
import {
  useRef,
  useState,
} from "react";

interface Story {
  storyId?: string;
  live: boolean;
  profilePic: string;
  user: string;
}

interface SubscriptionsProps {
  stories: Story[];
}

export default function Subscriptions({ stories }: SubscriptionsProps) {
  const [isFeedOpen, setIsFeedOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const setFeedOpen = () => {
    videoRef.current?.play();
    setIsFeedOpen(true);
  };

  const setFeedClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsFeedOpen(false);
  };

  return (
    <div className="mt-10">
      <p className="text-2xl font-semibold ml-5">Subscriptions</p>
      <div className="mt-8 flex overflow-y-scroll px-5">
        {stories.map(story => (
          <div
            onClick={setFeedOpen}
            className="hover:cursor-pointer relative text-center border-primary flex-none rounded-full border-[4px] mr-5 mb-10"
            key={story.storyId}
          >
            {story.live && (
              <p className="absolute mt-[66px] ml-[15px] text-sm text-center px-2 bg-primary text-white rounded-full z-10">
                LIVE
              </p>
            )}
            <Image
              className="border-white border-[4px] rounded-full h-[75px]"
              alt="Profile"
              src={story.profilePic}
              width={75}
              height={75}
            />
            <p className="absolute text-center mt-3 ml-1 text-xs">{story.user}</p>
          </div>
        ))}
      </div>
      {isFeedOpen && (
        <div
          onClick={setFeedClose}
          className="bg-[#000000d8] fixed bottom-0 h-[100vh] left-0 right-0 top-0 w-[100%] z-10 flex items-center"
        >
          <video ref={videoRef} className="m-auto">
            <source
              src="/assets/TB.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}