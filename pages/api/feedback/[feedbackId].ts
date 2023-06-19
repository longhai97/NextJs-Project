import { NextApiRequest, NextApiResponse }    from "next";
import { buildFeedbackPath, extractFeedback } from './index'

export type FeedbackData = {
  id: string
  text: string
  email: string
}
const handler = (request: NextApiRequest, response: NextApiResponse) => {
  const feedbackId                   = request?.query?.feedbackId
  const filePath                     = buildFeedbackPath()
  const feedbackData: FeedbackData[] = extractFeedback(filePath)
  const selectedFeedback             = feedbackData.find((feedback) => feedback.id === feedbackId)
  response.status(200).json({
    feedback: selectedFeedback
  })
}

export default handler;
