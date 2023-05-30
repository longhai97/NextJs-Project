import { getFeaturedEvents } from "@/helpers/api-util";
import EventList, { Event }  from "@/components/events/EventList";
import Head                  from 'next/head';

type Props = {
  events: Event[] | null
}

const HomePage = (props: Props) => {
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta name={ 'description' } content={ 'Find a lot of great events that allow you to evolve' }/>
      </Head>
      <EventList items={ props.events }/>
    </>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage;
