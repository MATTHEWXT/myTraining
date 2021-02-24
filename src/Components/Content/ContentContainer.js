import "./Content.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/content-reducer";
import Content from "./Content";
import {connect} from "react-redux";


let mupStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mupDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostTextActionCreator: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        }
    }
}

const ContentContainer = connect(mupStateToProps, mupDispatchToProps)(Content)

export default ContentContainer;