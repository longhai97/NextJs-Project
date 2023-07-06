import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.eventId;

  if (req.method === 'POST') {
    const { email, name, text } = req.body

    if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
      res.status(422).json({ message: 'All fields are mandatory' })
      return;
    }
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text
    }
    console.log('COMMENT__:', newComment)

    res.status(201).json({ message: 'Added comment', comment: newComment })
  }
  if (req.method === 'GET') {
    const dummy_data = [
      { id: 'c1', name: 'Alice', email: 'Alice_123@gmail.com', text: 'This is a dummy comment 1' },
      { id: 'c2', name: 'Max', email: 'Max_123@gmail.com', text: 'This is a dummy comment 2' },
      { id: 'c3', name: 'John', email: 'John_123@gmail.com', text: 'This is a dummy comment 3' },
    ]
    res.status(200).json({ comments: dummy_data })
  }
}

export default handler;
