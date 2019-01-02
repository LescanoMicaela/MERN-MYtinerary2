import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as  actionCreator  from '../store/actions/actions';


class Cities extends React.Component{
    componentDidMount() {
        this.props.fetchData('/api/cities');
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {this.props.cities.map((item) => (
                    <li key={item._id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        );
    }

  
}

// we take the state and map it to the props of this component
//with state we get acces to the state of the store
const mapStateToProps = (state) => {
    return {
        cities: state.cities,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

/*const mapStateToProps = (state,props) => {  
    console.log(props)
    console.log(state)
        return {
          cities: state.cities
        };
      }*/

/*const mapDispatchToProps = (dispatch) => {
    return{
        fetchData : () => actionCreator.fetchCities
         
        }*/
       

        const mapDispatchToProps = (dispatch) => {
            return {
                fetchData: (url) => dispatch(actionCreator.fetchCities(url))
            };
        };







//connect is a function that return a higher oder componets and wraps our Cities component.
// we pass mapstatetoprops to our connect, so when when we connect to redux
//knows what data we want to grab from redux and the prop we wnat to create to apply this data to it
export default connect(mapStateToProps, mapDispatchToProps)(Cities);
