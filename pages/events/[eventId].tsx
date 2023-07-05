import { Fragment } from 'react';
import Head         from 'next/head';

import { getEventById, getFeaturedEvents } from '@/helpers/api-util';
import EventSummary                        from '../../components/event-detail/event-summary';
import EventLogistics                      from '../../components/event-detail/event-logistics';
import EventContent                        from '../../components/event-detail/event-content';
import Comments                            from '../../components/input/comments';
import { GetStaticPaths, GetStaticProps }  from "next";
import { Event }                           from "@/type";

type Props = {
  selectedEvent: Event
}
const EventDetailPage = (props: Props) => {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{ event.title }</title>
        <meta
          name='description'
          content={ event.description }
        />
      </Head>
      <EventSummary title={ event.title }/>
      <EventLogistics
        date={ event.date }
        address={ event.location }
        image={ event.image }
        imageAlt={ event.title }
      />
      <EventContent>
        <p>{ event.description }</p>
      </EventContent>
      <Comments eventId={ event.id }/>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const eventId: string | string[] | null = context?.params?.eventId as string;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const events: Record<string, any>[] = await getFeaturedEvents();

  const paths = events.map(event => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: 'blocking'
  };
}

export default EventDetailPage;
