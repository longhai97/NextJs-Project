import { NextApiRequest, NextApiResponse } from "next";
import fs                                  from "fs";
import path                                from "path";

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
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    console.log('PATH_', filePath)
    const fileData = fs.readFileSync(filePath)
    const data     = JSON.parse(fileData.toString());

    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    response?.status(201).json({ message: "Success!", feedback: newFeedback });

  } else {
    response?.status(200).json({ message: "This works!" });
  }
}

export default handler;
