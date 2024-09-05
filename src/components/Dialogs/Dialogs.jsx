import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = () => {

    let dialogs = [
        { id: 1, name: "Noah" },
        { id: 2, name: "Oliver" },
        { id: 3, name: "Leo" },
        { id: 4, name: "Lily" },
        { id: 5, name: "Emma" },
        { id: 6, name: "Chloe" }
    ]

    let messages = [
        { id: 1, message: "Hi🩶" },
        { id: 2, message: "Mini pigs are the perfect mix of cuteness and endearment🩶" },
        { id: 3, message: "🐖" },
        { id: 4, message: "Mini pigs: small in size, but big in love🥰" },
        { id: 5, message: "🐽" },
        { id: 6, message: "Mini pigs are little tails that bring joy and warmth to the home🥰" }
    ]

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages
        .map(m => <Message message={m.message} />);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
