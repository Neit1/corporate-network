const SEND_CHAT_MESSAGE = 'SEND_CHAT_MESSAGE';
const DELETE_CHAT_MESSAGE = 'DELETE_CHAT_MESSAGE';
const UPDATE_CHAT_MESSAGE = 'UPDATE_CHAT_MESSAGE';

let initialState = {
    messages: [
        { id: 1, nickname: 'Sasha', message: 'Hi' },
        { id: 2, nickname: 'Nastya', message: 'Hello' },
        { id: 3, nickname: 'Sveta', message: 'How are you?' },
        { id: 4, nickname: 'Jack', message: 'Hello' },
        { id: 5, nickname: 'Vasya', message: 'hi' },
        { id: 6, nickname: 'Tom', message: 'Hello' },
        { id: 7, nickname: 'Nadya', message: 'hello' },
        { id: 8, nickname: 'Katya', message: 'Hello' }
    ],
    nickname: 'User'
}

const chatReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_CHAT_MESSAGE: 
            let newMessage = { 
                id: state.messages.length + 1, 
                nickname: state.nickname,
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage] 
            };
        case DELETE_CHAT_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.messageId)
            };
        case UPDATE_CHAT_MESSAGE:
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
    type: SEND_CHAT_MESSAGE, 
    newMessageBody
});

export const deleteMessage = (messageId) => ({
    type: DELETE_CHAT_MESSAGE, 
    messageId
});

export const updateMessage = (messageId, message) => ({
    type: UPDATE_CHAT_MESSAGE, 
    messageId,
    message
});

export default chatReducer;