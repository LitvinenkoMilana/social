import classes from './Profile.module.css';
import MyPosts from './My Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from '../../redax/state';

const Profile = (props) => {

  return (
    <div >
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;