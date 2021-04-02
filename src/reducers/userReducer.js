export default function userReducer(state = {
    user: [],
    currentView: []
}, action) {
    switch (action.type) {
        case 'ADD_USER':
            return state //this will establish the current user on log in
        case 'CHANGE_VIEW':
            return state //this will establish what player or team is being viewed
        default:
            return state
    }
}