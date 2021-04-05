export default function userReducer(state = {
    user: {},
    currentView: []
}, action) {
    switch (action.type) {
        case 'ADD_USER':
            return state //this will establish the current user on log in
        case 'ADD_PLAYER':
            return {...state, user: action.payload} //this will update the state user to reflect added player
        case 'ADD_TEAM':
            return state //this will udpate the state user to reflect added team
        case 'CHANGE_VIEW':
            return state //this will establish what player or team is being viewed
        default:
            return state
    }
}