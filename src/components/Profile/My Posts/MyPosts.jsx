import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h4>My posts</h4>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message='Hi, how are you?' name='vasya' />
        <Post message='i like pink pigs' />
        <Post />
        <Post />
        <Post />
        <Post />

      </div>
    </div>
  )
}

export default MyPosts