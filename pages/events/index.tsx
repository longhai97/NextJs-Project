import * as React from 'react';
import {getAllEvents} from "@/dummy-data";
import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import {useRouter} from "next/router";

const AllEventsPage: React.FC<React.ReactNode | React.ReactNode[]> = () => {
    const events = getAllEvents();
    const router = useRouter()
    const handleSearchEvent = (year: string | undefined, month: string | undefined) => {
        const path = `events/${year}/${month}`
        router.push(path)
    }
    return (
        <>
            <EventsSearch onSearch={handleSearchEvent}/>
            <EventList items={events}/>
        </>
    );
};

export default AllEventsPage;
