import * as React              from "react";
import { useEffect, useState } from "react";
import { useRouter }           from "next/router";
import EventList               from "../../components/events/EventList";
import ResultsTitle            from "@/components/events/ResultsTitle";
import Button                  from "@/components/ui/button";
import ErrorAlert              from "@/components/ui/errorAlert";
import { EventType }           from "@/pages/events/type";
import useSWR                  from "swr";
import Head                    from "next/head";

type Date = {
  year: number
  month: number
}
type PropsFromServerSide = {
  hasError: boolean,
  events: EventType[]
  dateTime: Date
}

function FilteredEventsPage(props: PropsFromServerSide) {

  const [ loadedEvents, setLoadedEvents ] = useState<EventType[]>([]);
  const router                            = useRouter();
  const filterData                        = router.query.slug || [];

  const {
          data,
          error
        } = useSWR("https://nextjs-course-b0a08-default-rtdb.asia-southeast1.firebasedatabase.app/events.json");

  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key]
        });
      }
      setLoadedEvents(events)
    }
  }, [ data ]);

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name='description' content={ `A list of filtered events.` }/>
    </Head>
  );

  if (!loadedEvents) {
    return (
      <>
        { pageHeadData }
        <p className={ "center" }>Loading...</p>
      </>
    );
  }

  const filterYear  = filterData[0];
  const filterMonth = filterData[1];

  const numYear         = +filterYear;
  const numMonth        = +filterMonth;
  const filterCondition = isNaN(numYear) || isNaN(numMonth) || numYear > 2023 || numYear < 2021 || numMonth > 12 || numMonth < 1 || error;

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name={ 'description' }
        content={ `All events for ${ numMonth }/${ numYear }.` }
      />
    </Head>
  )

  if (filterCondition) {
    return (
      <>
        { pageHeadData }
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className={ "center" }>
          <Button link={ "/events" }>Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert><p> No events found for the chosen filter!</p></ErrorAlert>
        <div className={ "center" }>
          <Button link={ "/events" }> Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      { pageHeadData }
      <ResultsTitle date={ date }/>
      <EventList items={ filteredEvents }/>
    </>
  );
}

// export const getServerSideProps = async (params: GetServerSidePropsContext) => {
//   const filterData = params.query;
//
//   const filterYear  = filterData[0] ?? 0;
//   const filterMonth = filterData[1] ?? 0;
//
//   const numYear  = +filterYear;
//   const numMonth = +filterMonth;
//
//   if (isNaN(numYear) || isNaN(numMonth) || numYear > 2023 || numYear < 2021 || numMonth > 12 || numMonth < 1) {
//     return {
//       props: {
//         "hasError": true,
//       }
//     };
//   }
//
//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth
//   });
//
//   return {
//     props: {
//       events: filteredEvents,
//       dateTime: {
//         year: numYear,
//         month: numMonth
//       }
//     }
//   };
// };

export default FilteredEventsPage;
