import { NextApiRequest, NextApiResponse } from "next";
import fs                                  from "fs";
import path                                from "path";

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
}

export const extractFeedback = (filePath: string) => {
  const fileData = fs.readFileSync(filePath)
  return JSON.parse(fileData.toString());
}

const handler = (request: NextApiRequest,
                 response: NextApiResponse) => {
  if (request.method === "POST") {
    const email        = request.body.email;
    const feedbackText = request.body.text

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    }
    //store that in database or in a file
    const filePath    = buildFeedbackPath();
    const data        = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    response?.status(201).json({ message: "Success!", feedback: newFeedback });

  } else {
    const filePath = buildFeedbackPath();
    const data     = extractFeedback(filePath);
    response?.status(200).json({ feedback: data });
  }
}

export default handler;
