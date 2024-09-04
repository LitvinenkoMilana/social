import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={`${classes.dialog} ${props.isActive ? classes.active : ''}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Messages = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Noah" id="1" />
                <DialogItem name="Oliver" id="2" isActive={true} />
                <DialogItem name="Leo" id="3" />
                <DialogItem name="Lily" id="4" />
                <DialogItem name="Emma" id="5" />
                <DialogItem name="Chloe" id="6" />
            </div>
            <div className={classes.messages}>
                <Messages message="Hi🩶" />
                <Messages message="Mini pigs are the perfect mix of cuteness and endearment🩶" />
                <Messages message="🐖" />
                <Messages message="Mini pigs: small in size, but big in love🥰" />
                <Messages message="🐽" />
                <Messages message="Mini pigs are little tails that bring joy and warmth to the home🥰" />
            </div>
        </div>
    );
}

export default Dialogs;
