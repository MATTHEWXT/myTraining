import React from "react";
import "./Dialogs.css";
import {NavLink} from 'react-router-dom';
import Massages from "./Massages/Massages";

const DialogItem = (props) => {
    return (
        <li><NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink></li>
    )
};
const Dialogs = (props) => {
    let state = props.DialogsPage;
    let userName = state.dialogs.map(n => <DialogItem name={n.name} id={n.id}/>);
    let Massage = state.massages.map(m => <Massages massageDialogs={m.massage} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();

    };

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body)
    };

    return (
        <div className='dialogs__wrapper'>
            <div className="dialogs__tittle">
                Друзья
            </div>
            <div className="dialogs__container">
                <div className="dialogs__user-name">
                    <ul>
                        {userName}
                    </ul>
                </div>

                <div className="massage__container">
                    <div className='user__item'>{Massage}</div>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange}/><br/>
                    </div>
                    <div>
                        <button type="send" onClick={onSendMessageClick}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;