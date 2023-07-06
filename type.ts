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

export type Comment = {
  id: string | number
  email: string,
  name: string,
  text: string,
}

export type CommentList = {
  items: Comment[]
}
