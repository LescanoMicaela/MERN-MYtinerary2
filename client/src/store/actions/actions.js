
import fetch from 'cross-fetch'

/*export const getCities = (cities) => {return {type: 'GET_CITIES',cities : cities} }*/

{/*
   export const getAllCities= (dispatch) => {
    return fetch('/api/cities')
    .then(response => {
       return response.json();
    })
    .catch(error => {
      console.log(error);
    });
  }
 
  
 export const loadCities= () => {  
    return function(dispatch) {
      return getAllCities().then(cities => {
        dispatch(getCities(cities));
      }).catch(error => {
        throw(error);
      });
    };
  }
*/}

export function itemsHasErrored(bool) {
  return {
      type: 'ITEMS_HAS_ERRORED',
      hasErrored: bool
  };
}
export function itemsIsLoading(bool) {
  return {
      type: 'ITEMS_IS_LOADING',
      isLoading: bool
  };
}
export function itemsFetchDataSuccess(cities) {
  return {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      cities
  };
}




export function fetchCities(url) {
  return (dispatch) => {
      dispatch(itemsIsLoading(true));
      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
              dispatch(itemsIsLoading(false));
              return response;
          })
          .then((response) => response.json())
          .then((cities) => {
            console.log(cities)
            dispatch(itemsFetchDataSuccess(cities))})
          .catch(() => dispatch(itemsHasErrored(true)));
  };
}