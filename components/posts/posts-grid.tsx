import PostItem from './post-item';
import classes  from './posts-grid.module.css';
import { Post } from "@/components/posts/all-posts";

type Props = {
  posts: Post[]
}

function PostsGrid(props: Props) {
  const { posts } = props;

  return (
    <ul className={ classes.grid }>
      { posts.map((post) => (
        <PostItem key={ post.slug } post={ post }/>
      )) }
    </ul>
  );
}

export default PostsGrid;
