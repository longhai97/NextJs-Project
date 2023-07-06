// import PostsGrid from '../posts/posts-grid';
import classes   from './featured-posts.module.css';

export type Grid = {
  posts: any
}
function FeaturedPosts(props:Grid) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      {/*<PostsGrid posts={props.posts} />*/}
    </section>
  );
}

export default FeaturedPosts;
