export async function getAllEvents() {
  const response = await fetch('https://nextjs-course-b0a08-default-rtdb.asia-southeast1.firebasedatabase.app/events.json')
  const data     = await response.json()
  const events   = []

  for (const key in data) {
    events.push({
      id: key,
      ...data[key]
    });
  }
  return events
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents()
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id: any) {
  const allEvents = await getAllEvents()
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter: { year: any; month: any; }) {
  const { year, month } = dateFilter;
  const allEvents       = await getAllEvents()

  return allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
}
