import * as React                from 'react';
import { getEventById }          from "@/dummy-data";
import EventSummary              from "@/components/event-detail/EventSummary"
import EventLogistics            from "@/components/event-detail/EventLogistics"
import EventContent              from "@/components/event-detail/EventContent"
import { getFeaturedEvents }     from "@/helpers/api-util";
import { GetStaticPropsContext } from "next/types";
import { EventType }             from "@/pages/events/type";

type Props = {
  selectedEvent: EventType
}

function EventDetailPage(props: Props) {
  const event    = props.selectedEvent;

  if (!event) {
    return <div className={ "center" }><p>Loading..</p></div>
  }
  return (
    <>
      <EventSummary title={ event.title }/>
      <EventLogistics
        date={ event.date }
        address={ event.location }
        image={ event.image }
        imageAlt={ event.description }
      />
      <EventContent>
        <p>{ event.description }</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const eventId = context.params?.eventId;
  const event   = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30
  }
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths  = events.map(item => ({ params: { eventId: item.id } }))
  return {
    paths: paths,
    fallback: 'blocking'
  }
}

export default EventDetailPage;
