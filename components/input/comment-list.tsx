import classes         from './comment-list.module.css';
import { CommentList } from "@/type";

function CommentList(props: CommentList) {
  console.log('PROPS__: ', props);
  const { items } = props

  return (
    <ul className={ classes.comments }>
      { items?.map((item) => (
        <li key={ item.id }>
          {' '}
          <p>{ item.text }</p>
          <div>By <address>{ item.name }</address></div>
        </li>
      )) }
    </ul>
  );
}

export default CommentList;
