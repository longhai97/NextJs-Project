import * as React from 'react';
import classes from './EventItem.module.css';
import Button from "@/components/ui/button";
import DateIcon from "../icons/date-icon"
import ArrowRightIcon from "../icons/arrow-right-icon"
import AddressIcon from "../icons/address-icon";
import Image from "next/image"

type Props = { id: string, title: string, description: string, location: string, date: string, image: string, isFeatured: boolean };

function EventItem(props: Props) {
    const {title, image, date, location, id} = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`
    return (
        <li className={classes.item}>
            <Image width={'400'} height={'400'} src={'/' + image} alt={title}/>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon/>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon/>
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default EventItem;
