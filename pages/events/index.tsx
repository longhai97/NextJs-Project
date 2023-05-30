import * as React       from 'react';
import { getAllEvents } from "@/helpers/api-util"
import EventList        from "@/components/events/EventList";
import EventsSearch     from "@/components/events/EventsSearch";
import { useRouter }    from "next/router";
import { EventType }    from "@/pages/events/type";
import Head             from "next/head";

type Props = {
  events: EventType[]
}
const AllEventsPage: React.FC<Props> = ({ events }) => {
  const router            = useRouter();
  const handleSearchEvent = (year: string | undefined, month: string | undefined) => {
    const path = `events/${ year }/${ month }`
    router.push(path)
  }
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta name={ 'description' } content={ 'All events' }/>
      </Head>
      <EventsSearch onSearch={ handleSearchEvent }/>
      <EventList items={ events }/>
    </>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events
    },
    revalidate: 60
  }
}

export default AllEventsPage;
