'use client'
import React, { useState } from 'react'
import DisplaySelection from '../../components/_common/components/DisplaySelection'
import { MobileLayout } from '../../components/MobileLayout'
import Search from '../../components/_common/components/Search'
import PayPerView from '../../components/ContentDiscovery/PayPerView'
import Streams from '../../components/ContentDiscovery/Streams'
import Podcasts from '../../components/ContentDiscovery/Podcasts'
import Reels from '../../components/ContentDiscovery/Reels'
import All from '../../components/ContentDiscovery/All'
import Music from '../../components/ContentDiscovery/Music'
import Videos from '../../components/ContentDiscovery/Videos'
import { MixCards, cards, eventCards, options, podcastCards, videoCards } from '../../server-actions/content/dummyContent'

export default function ContentDiscovery(): JSX.Element {
  const [activeDayIndex, setActiveDayIndex] = useState<number | null>(0)

  const components: Record<number, JSX.Element> = {
    0: <All cards={cards} videoCards={videoCards} eventCards={eventCards} />,
    1: <Streams videoCards={videoCards} eventCards={eventCards} />,
    2: <Videos videoCards={videoCards} eventCards={eventCards} />,
    4: <Podcasts podcastCards={podcastCards} videoCards={videoCards} />,
    5: <Reels cards={cards} videoCards={videoCards} />,
    6: <PayPerView cards={cards} eventCards={eventCards} />,
  }

  const defaultComponent = <Music videoCards={MixCards} podcastCards={podcastCards} />;

  return (
    <MobileLayout>
      <Search hold='Search for artists, venues, and events' />
      <DisplaySelection options={options} activeDayIndex={activeDayIndex} setActiveDayIndex={setActiveDayIndex} />
      {activeDayIndex !== null ? components[activeDayIndex] || defaultComponent : defaultComponent}
    </MobileLayout>
  )
}
