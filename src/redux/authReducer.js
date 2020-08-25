const CHECK_USER_DATA = 'CHECK_USER_DATA';
const LOG_OUT = 'LOG_OUT';

let initialState = {
    userId: 111,
    login: 'userLogin',
    password: '12345',
    isAuth: false,
    resultCode: 0
};

const authReducer = (state = initialState, action) => { 
    switch(action.type) {
        case CHECK_USER_DATA:
            if (action.data.login === state.login &&
                action.data.password === state.password)
                return {
                    ...state,
                    isAuth: true,
                    resultCode: 0
                }
            else
                return {
                    ...state,
                    isAuth: false,
                    resultCode: 1
                }
        case LOG_OUT: {
            return {
                ...state,
                isAuth: false,
                resultCode: 0
            }
        }    
        default:
            return state;
    }

}

export const checkAuthUserData = (userId, login, password) => {
    return {
        type: CHECK_USER_DATA,
        data: {userId, login, password},
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT
    }
}

export default authReducer;