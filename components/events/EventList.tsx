import React, {Key} from 'react';
import EventItem from "@/components/events/EventItem";
import classes from './EventList.module.css'

type Event = { id: string, title: string, description: string, location: string, date: string, image: string, isFeatured: boolean }
type Props = {
    items: Event[] | undefined
};

function EventList(props: Props) {
    const {items} = props
    return (
        <ul className={classes.list}>
            {items?.map(event => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    image={event.image}
                    location={event.location}
                    date={event.date} description={''}
                    isFeatured={false}
                />
            ))}
        </ul>
    );
}

export default EventList;
