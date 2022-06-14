const initState = {
    users: [
        {id: 1, name: 'Quang'},
        {id: 2, name: 'Jason'},
        {id: 3, name: 'Trinh'}
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'DELETE_USER':
            // console.log('>>> Run into reducer delete user: ', action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id )
            return {
                ...state, users
            };
        case 'CREATE_USER':
            let genId = Math.floor(Math.random() * 100000)
            let user = {
                id: genId,
                name: `Random - ${genId}`
            }
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
}


export default rootReducer;