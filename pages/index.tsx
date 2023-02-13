import {getFeaturedEvents} from '@/dummy-data'
import EventList from "@/components/events/EventList";

const HomePage = () => {
    const featuredEvents = getFeaturedEvents();

    return (
        <>
            <ul>
                <EventList items={featuredEvents}/>
            </ul>
        </>
    )
}

export default HomePage;
