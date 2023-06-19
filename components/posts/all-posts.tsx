import classes   from './all-posts.module.css';
import PostsGrid from './posts-grid';

export type Post = {
  posts:any[];
  slug: string
}
function AllPosts(props: Post) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
