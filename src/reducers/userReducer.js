export default function userReducer(state = {
    user: {},
    loggedIn: false
}, action) {
    switch (action.type) {
        case 'ADD_USER':
            return {...state, user: action.payload, loggedIn: true}; //this will establish the current user on log in
        case 'ADD_PLAYER':
            return {...state, user: action.payload} //this will update the state user to reflect added player
        case 'ADD_TEAM':
            return {...state, user: action.payload} //this will udpate the state user to reflect added team
        default:
            return state
    }
}