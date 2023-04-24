import * as React from 'react';
import {useRouter} from 'next/router'
import {GetStaticProps} from 'next'
import {getEventById} from "@/dummy-data";
import EventSummary from "@/components/event-detail/EventSummary"
import EventLogistics from "@/components/event-detail/EventLogistics"
import EventContent from "@/components/event-detail/EventContent"
import ErrorAlert from "@/components/ui/errorAlert";
import {getAllEvents} from "@/helpers/api-util";

function EventDetailPage() {
    const router = useRouter()
    const eventId = router.query.eventId
    const event = getEventById(eventId);

    if (!event) {
        return <ErrorAlert><p style={{color: "white"}}> No event found</p></ErrorAlert>
    }
    return (
        <>
            <EventSummary title={event.title}/>
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.description}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const events = await getAllEvents();
    // const paths = events.map()
    return {
        props: {}
    }
}

export default EventDetailPage;
