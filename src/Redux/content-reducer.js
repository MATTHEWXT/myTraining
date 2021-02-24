const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT'

let initialState = {
    posts: [{massagePost: "Привет мир"}],
    newPostText: ''
};

const contentReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                massagePost: state.newPostText
            };

            return {...state, posts: [...state.posts, newPost], newPostText: '',}
        case UPDATE_NEW_TEXT:
            return {...state, newPostText: action.newText}
        default:
            return state
    }
};

export const addPostActionCreator = () => ({type: 'ADD_POST'});
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE_NEW_TEXT', newText: text})

export default contentReducer;