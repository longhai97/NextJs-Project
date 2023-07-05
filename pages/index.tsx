import Head from 'next/head';

import { getFeaturedEvents } from '@/helpers/api-util';
import EventList from '../components/events/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration';
import { HomePageProps } from "@/type";

function HomePage(props:HomePageProps) {
    return (
      <div>
          <EventList items={props.events} />
          <Head>
              <title>NextJS Events</title>
              <meta
                name='description'
                content='Find a lot of great events that allow you to evolve...'
              />
          </Head>
          <NewsletterRegistration />
      </div>
    );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            events: featuredEvents,
        },
        revalidate: 1800,
    };
}

export default HomePage;
