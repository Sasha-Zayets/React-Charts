const defaultState = {
    userCategory: [],
    userData: [],
    commentsData: [],
    commentsCategories: []
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'SET_CATEGORY_USER':
            return {
                ...state,
                userCategory: action.payload
            }
        case 'SET_USER_DATA':
            return {
                ...state,
                userData: action.payload
            }
        case 'SET_COMMENTS_DATA':
            return {
                ...state,
                commentsData: action.payload
            }
        case 'SET_COMMENTS_CATEGORIES':
            return {
                ...state,
                commentsCategories: action.payload
            }
        default:
            return {...state}
    }   
}

export default reducer;