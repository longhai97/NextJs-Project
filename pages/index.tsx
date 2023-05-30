import React, { useRef, useState } from "react";

type FeedbackItem = {
  id: string;
  email?: string;
  text: string;
};

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);

  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const feedbackInputRef = useRef<HTMLTextAreaElement | null>(null);

  const submitFormHandler = (event:any) => {
    event.preventDefault();
    if (!emailInputRef.current || !feedbackInputRef.current) return;
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const requestBody = {
      email: enteredEmail,
      text: enteredFeedback,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => console.log('RESPONSE__',response.json()))
      .then((data) => console.log("LOGS__", data))
      .catch((error) => console.log("ERROR__", error));
  };

  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => {
        if (data?.feedback) {
          setFeedbackItems(data.feedback);
        } else {
          setFeedbackItems([]);
        }
      });
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor={"email"}>Your Email Address</label>
          <input type="email" name="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor={"feedback"}>Your Feedback</label>
          <textarea id={"feedback"} rows={5} ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
