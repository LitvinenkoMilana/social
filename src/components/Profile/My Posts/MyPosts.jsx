import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts
    .map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    // newPostElement.current.value = '';
  }

  return (
    <div className={classes.postsBlock}>
      <h4>My posts</h4>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>add Post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}

      </div>
    </div>
  )
}

export default MyPosts