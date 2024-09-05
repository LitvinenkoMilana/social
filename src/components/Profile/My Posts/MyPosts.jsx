import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "pink pigs", likesCount: 11 },
    { id: 2, message: "pigs", likesCount: 7 },
    { id: 2, message: "pink", likesCount: 11 }


  ]

  let postsElements = posts
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