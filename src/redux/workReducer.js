const SEND_WORK_MESSAGE = 'SEND_WORK_MESSAGE';
const DELETE_WORK_MESSAGE = 'DELETE_WORK_MESSAGE';
const UPDATE_WORK_MESSAGE = 'UPDATE_WORK_MESSAGE';

let initialState = {
    messages: [
        { id: 1, nickname: 'Sasha', message: 'Hi' },
        { id: 2, nickname: 'Sveta', message: 'How are you?' },
        { id: 3, nickname: 'Tom', message: 'Hello' },
        { id: 4, nickname: 'Vasya', message: 'hi' },
        { id: 5, nickname: 'Nadya', message: 'hello' }
    ],
    nickname: 'User'
}

const workReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_WORK_MESSAGE: 
            let newMessage = { 
                id: state.messages.length + 1, 
                nickname: state.nickname,
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage] 
            };
        case DELETE_WORK_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.messageId)
            };
        case UPDATE_WORK_MESSAGE:
            return {
                ...state,
                messages: state.messages.map(m => {
                    if (m.id === action.messageId) {
                        m.message = action.message;
                    }
                    return m;
                })
            };
        default:
            return state;
    }

}

export const setMessage = (newMessageBody) => ({
    type: SEND_WORK_MESSAGE, 
    newMessageBody
});

export const deleteMessage = (messageId) => ({
    type: DELETE_WORK_MESSAGE, 
    messageId
});

export const updateMessage = (messageId, message) => ({
    type: UPDATE_WORK_MESSAGE, 
    messageId,
    message
});

export default workReducer;