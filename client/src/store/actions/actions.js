


export const getCities = (cities) => {
    return{
        type: 'GET_CITIES',
        cities : cites
    }
}


  const getAllCities = (dispatch) {
    return fetch('/api/cities')
    .then(response => {
      return response.json();
    })
    .then( data => dispatch(getCities(data)))
    .catch(error => {
      return error;
    });
  }
