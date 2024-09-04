import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            {/* <div>
                <img
                    src='https://img.icons8.com/?size=100&id=Agzas5p4QLD6&format=png&color=F25081' />
            </div> */}
            <div>
                <img
                    src='https://static-cse.canva.com/blob/847947/20210609T200549.220.jpg' />
            </div>
            
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;