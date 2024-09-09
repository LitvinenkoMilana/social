import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElements = props.posts
    .map(p => <Post message={p.message} likesCount={p.likesCount} />)

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
        {postsElements}

      </div>
    </div>
  )
}

export default MyPosts