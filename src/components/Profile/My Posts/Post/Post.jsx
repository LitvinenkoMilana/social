import classes from './Post.module.css';

const Post = ({message, likesCount}) => {

  return (
    <div className={classes.item}>
      <img src='https://i.pinimg.com/originals/d4/6f/ed/d46fed16acf0fd01695ad1c948412e22.jpg' />
        {message}
        {likesCount}
      <div>
        <span>like</span>
        <p>вишенки собаки</p>
      </div>
    </div>

  )
}

export default Post