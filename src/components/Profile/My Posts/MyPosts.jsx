import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <div className={classes.posts}>
        <Post message='Hi, how are you?' name='vasya'/>
        <Post message='i like pink pigs'/>
        <Post />
        <Post />
        <Post />
        <Post />

      </div>
    </div>
  )
}

export default MyPosts