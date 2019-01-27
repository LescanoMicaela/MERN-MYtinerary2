import React from 'react';
import { connect } from 'react-redux';
import * as  actionCreator  from '../store/actions/actions';
import Loader from './Loader';
import './cities.css';
import {DebounceInput} from 'react-debounce-input';

class Cities extends React.Component{
    constructor(){
        super();
        this.state ={
          input: '',
        }
      }
    
      onChangeHandler(e){
            this.setState({
            input: e.target.value.toLowerCase(),
        })
            console.log(this.state.input)
      }
    
    componentDidMount() {
        this.props.fetchData('/api/cities');
    }
    
    render() {
        //Destructuring props to use for conditional rendering
        const{hasErrored,isLoading} = this.props;

        //Filter cities by input here
        let filteredCityList = this.props.cities
            .filter(city => this.state.input === '' || city['name'].toLowerCase().includes(this.state.input))
            .map((city) => <Citydiv key={city._id}name={city.name} image={city.image} />);
            
            return(
                <div className='contentCities'>
                     {hasErrored && <p>Sorry! There was an error loading the items</p>}
                    { isLoading &&  <Loader />}
                    {!hasErrored && !isLoading &&
                    <React.Fragment>
                        <Filter classStyle='filterDiv' onChangeHandler={this.onChangeHandler.bind(this)}/>
                         { filteredCityList.length > 0 &&
                        <div className='citiesList'>
                            {filteredCityList}
                        </div> }
                        { filteredCityList.length == 0 &&
                        <h2>No results found</h2>
                        }
                    </React.Fragment>
                    }
                </div>
            )
    }           
}

const Citydiv = (props) => {
    return (
        <div style={{backgroundImage: `url(${props.image})`}}>
            <h2>{props.name}</h2>
        </div>
    )
}

// we take the state and map it to the props of this component
//with state we get acces to the state of the store
const mapStateToProps = (state) => {
    console.log(state)
    return {
        cities: state.cities,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(actionCreator.fetchCities(url))
        };
    };

const Filter = (props) => {
    return (
        <div className={props.classStyle}>
             <DebounceInput
                minLength={1}
                debounceTimeout={300}  
                onChange={props.onChangeHandler} type='text' placeholder='  Filter by city...' />
        </div>
    )
}


//connect is a function that return a higher oder componets and wraps our Cities component.
// we pass mapstatetoprops to our connect, so when when we connect to redux
//knows what data we want to grab from redux and the prop we wnat to create to apply this data to it
export default connect(mapStateToProps, mapDispatchToProps)(Cities);
