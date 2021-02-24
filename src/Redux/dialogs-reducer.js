const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogs: [
        {name: "Michail", id: 1},
        {name: "Matthew", id: 2},
        {name: "Justin", id: 3},
        {name: "Jonny", id: 4},
        {name: "Michail", id: 5},
        {name: "Michail", id: 1},
        {name: "Matthew", id: 2},
        {name: "Justin", id: 3},
        {name: "Jonny", id: 4},
        {name: "Michael", id: 5}
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
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return{...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {...state, massages: [...state.massages, {massage: body}], newMessageBody: ''}
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'})
export const updateNewMessageBodyCreator = (body) => ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body});

export default dialogsReducer;