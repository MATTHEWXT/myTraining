import {combineReducers, createStore} from "redux";
import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import UsersFindReducer from "./usersFind-reducer";


let reducers = combineReducers({
    profilePage: contentReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: UsersFindReducer,
})

let store = createStore(reducers);

export default store;