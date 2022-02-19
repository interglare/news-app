const USER_STATE = {
    isAdmin: false
}

const user = (state = USER_STATE, action ) => {
    switch (action.type) {
        case "LOGIN_ADMIN":
            console.log("logged as admin");
            return {...state, isAdmin: true};
        default:
            return state;
    }
}

export default user;