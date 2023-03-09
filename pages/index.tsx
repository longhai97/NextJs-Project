import {getFeaturedEvents} from "@/helpers/api-util";
import EventList, {Event} from "@/components/events/EventList";


type Props = {
    events: Event[] | undefined
}

const HomePage = (props: Props) => {
    return (
        <>
            <EventList items={props.events}/>
        </>
    )
}


export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents()
    return {
        props: {
            events: featuredEvents
        }
    }
}

export default HomePage;
