const initState = {
    cities: [],
    hasErrored: false,
    isLoading : false,
    itinerary:[],
    itineraryIsLoading: true,
    itineraryHasErrored: false,
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
       
    if ( action.type === 'ITINERARY_IS_LOADING') { 
        newState.itineraryIsLoading = action.itineraryIsLoading

    }
    if ( action.type === 'ITINERARY_FETCH_DATA_SUCCESS'){
        newState.itinerary = action.itinerary
    } 
 
   
    if ( action.type === 'ITINERARY_HAS_ERRORED') {      
        newState.itineraryHasErrored = action.itineraryHasErrored 
    
    }
    return newState; 
}

   


 

export default rootReducer;