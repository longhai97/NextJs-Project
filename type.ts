export type HomePageProps = {
  events: Event[]
}

export type Event = {
  id: string | number
  title: string
  description: string
  date: string
  image: string
  location: string
}
