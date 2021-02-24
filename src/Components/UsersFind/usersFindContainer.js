import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/usersFind-reducer";
import findUsers from "./FindUsers";


let mupStateToProps=(state)=>{
    return {
        users: state.usersPage.users
    }
}

let mupDispatchToProps=(dispatch)=>{
    return {
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(userId)=>{
            dispatch(setUsersAC(userId))
        }
    }
}

const ContentUsersFind = connect(mupStateToProps, mupDispatchToProps)(findUsers)

export default ContentUsersFind;