 import dialogsReducer from "./dialogs-reducer";
import contentReducer from "./content-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{massagePost: "Привет мир"}],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {name: "Michail", id: 1},
                {name: "Matthew", id: 2},
                {name: "Justin", id: 3},
                {name: "Jonny", id: 4},
                {name: "Michail", id: 5},
                {name: "Michail", id: 6},
                {name: "Matthew", id: 7},
                {name: "Justin", id: 8},
                {name: "Jonny", id: 9},
                {name: "Michael", id: 10}
            ],
            massages: [
                {massage: "Hello world, i'm live in  America"},
                {massage: "A typical American"},
                {massage: "A. S. Pushkin"},
                {massage: "About myself"},
                {massage: "Acid Rains"},
                {massage: "Advertising as persuasion"},
                {massage: "Advertising"},
                {massage: "America, the beautiful"},
                {massage: "An episode from the history of Ukraine"}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
//-------------------------------------------------------------//
    _callSubscriber() {
        console.log('hello')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {//action -- объект, что-то делает для изменнения//
        this._state.profilePage = contentReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state)
    }

};

export default store;