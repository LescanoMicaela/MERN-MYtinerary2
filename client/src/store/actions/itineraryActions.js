
import fetch from 'cross-fetch';



export function  itineraryHasErrored(bool) {
  return {
      type: 'ITINERARY_HAS_ERRORED',
      itineraryhasErrored: bool
  };
}
export function itineraryIsLoading(bool) {
  return {
      type: 'ITINERARY_IS_LOADING',
      itineraryIsLoading: bool
  };
}
export function itineraryFetchDataSuccess(itinerary) {
  return {
      type: 'ITINERARY_FETCH_DATA_SUCCESS',
      itinerary
  };
}




export function fetchCities(url) {
  return (dispatch) => {
      dispatch( itineraryIsLoading(true));
      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
              return response;
          })
          .then((response) => response.json())
          .then((itinerary) => {
            console.log(' this is the data im fetching',itinerary)
            dispatch(itineraryFetchDataSuccess(itinerary))
            dispatch(itineraryIsLoading(false))
        })
          .catch(() => dispatch(itineraryHasErrored(true)));
  };
}