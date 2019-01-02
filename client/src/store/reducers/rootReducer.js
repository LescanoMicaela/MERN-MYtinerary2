const initState = {
    cities: []
}

//we create a root reducer, in a big application we would have more than one reduce
// we always pass state and action as parameters.
// we pass a default parameter of init state
const rootReducer = (state = initState,action) => {
    if ( action.type == 'GET_CITIES'){
        return {
            ...state,
            cities : [...state.cities, ...action.cities]
        }  
    }
}

export default rootReducer;