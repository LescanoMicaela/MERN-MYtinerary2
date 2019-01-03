const initState = {
    cities: [],
    hasErrored: false,
    isLoading : false
}

//we create a root reducer, in a big application we would have more than one reduce
// we always pass state and action as parameters.
// we pass a default parameter of init state

const rootReducer = (state = initState,action) => {
    const newState = {...state};
    if ( action.type === 'ITEMS_HAS_ERRORED') {      
            newState.hasErrored = action.hasErrored  
    }
    if ( action.type === 'ITEMS_IS_LOADING') { 
            newState.isLoading = action.isLoading
    
    }
    if ( action.type === 'ITEMS_FETCH_DATA_SUCCESS'){
            newState.cities = action.cities
        } 
        return newState; 
    }
   


 

export default rootReducer;