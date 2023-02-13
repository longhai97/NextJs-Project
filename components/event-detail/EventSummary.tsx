import classes from './EventSummary.module.css';

type Prop = {
    title: string
}

function EventSummary(props: Prop) {
    const {title} = props;

    return (
        <section className={classes.summary}>
            <h1>{title}</h1>
        </section>
    );
}

export default EventSummary;

