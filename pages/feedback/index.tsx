import React, { useState }                    from 'react';
import { buildFeedbackPath, extractFeedback } from '@/pages/api/feedback'
import { FeedbackData }                       from "@/pages/api/feedback/[feedbackId]";

export type Prop = {
  feedbackItems: Record<string, any>
}
type LoadFeedbackHandler = (tag: Pick<FeedbackData, 'id'>) => void;

const FeedbackPage = (props: Prop) => {
  const [ feedbackData, setFeedbackData ]        = useState<FeedbackData>();
  const loadFeedbackHandler: LoadFeedbackHandler = (id) => {
    fetch(`/api/feedback/${ id }`).then(response => response.json()).then(data => {
      setFeedbackData(data?.feedback);
    })
  }

  return (
    <>
      { feedbackData && <p>{ feedbackData.email } </p> }
      <ul>
        { props.feedbackItems.map((item: any) => (
          <li key={ item.id }>{ item.text } --- { item.id}
            <button onClick={ () => loadFeedbackHandler(item.id) }>Show detail</button>
          </li>
        )) }
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data     = extractFeedback(filePath)
  return {
    props: {
      feedbackItems: data
    }
  }
}

export default FeedbackPage;
