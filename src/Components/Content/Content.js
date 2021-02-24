import React from "react";
import "./Content.css";
import UsersPosts from "./UsersPosts/UsersPosts";

const Content = (props) => {
    let userPost = props.posts.map(p => <UsersPosts massagePost={p.massagePost}/>);

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost()
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTextActionCreator(text)
    };

    return (
        <div className='profile__wrapper'>
            <div className="back__img">
                <div className="bg__opacity">
                    <div className="user__text">
                        <p>Имя: </p>
                        <p>Цитата: </p>
                        <p>Возраст: </p>
                        <p>Город: </p>
                    </div>
                </div>
            </div>
            <div className="user__post">
                <p>Мой пост</p>
                <textarea ref={newPostElement}
                          value={props.newPostText} onChange={onPostChange}/><br/>
                <button onClick={onAddPost} type="submit" value="Опубликовать">Опубликовать</button>

            </div>
            {userPost}
        </div>
    )
};

export default Content;