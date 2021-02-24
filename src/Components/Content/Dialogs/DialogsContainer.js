import "./Dialogs.css";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mupStateToProps = (state) => {
    return {DialogsPage: state.dialogsPage}
};

let mupDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
    }
};
const DialogsContainer = connect(mupStateToProps, mupDispatchToProps)(Dialogs);

export default DialogsContainer;

