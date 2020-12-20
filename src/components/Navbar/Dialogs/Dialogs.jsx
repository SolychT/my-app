import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/0" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrew' id='2'/>
                <DialogItem name='Antony' id='3'/>
                <DialogItem name='Anna' id='4'/>
                <DialogItem name='Valery' id='5'/>
                <DialogItem name='Mary' id='6'/>


            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="How are u?"/>
                <Message message="YO"/>
            </div>
        </div>
    )
}

export default Dialogs;