import * as React from 'react';
import {useRouter} from 'next/router'
import {getEventById} from "@/dummy-data";
import EventSummary from "@/components/event-detail/EventSummary"
import EventLogistics from "@/components/event-detail/EventLogistics"
import EventContent from "@/components/event-detail/EventContent"


function EventDetailPage() {
    const router = useRouter()
    const eventId = router.query.eventId
    const event = getEventById(eventId);

    if (!event) {
        return <p style={{color: "white"}}> No event found</p>
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

export default EventDetailPage;
