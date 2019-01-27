import React from 'react';
import Header from './CityButton';
import { connect } from 'react-redux';
import * as  actionCreator  from '../store/actions/itineraryActions';
import Loader from './Loader';
import './itineray.css';
import {Link} from 'react-router-dom';
import NoPic from '../assets/images/profilesImages/profile.png';

class Itinerary extends React.Component{
    constructor(){
        super();
        this.state ={
          input: '',
          city: ''
        }
      }
    
    componentDidMount(){
        const getParameter = window.location.href.split("/itinerary/")[1];  
        let makeUrl = `/api/itineraries/${getParameter}`;
        
        this.props.fetchData(makeUrl);
    }
    render(){
        //Destructuring props to use for conditional rendering
        const{itineraryHasErrored,itineraryIsLoading} = this.props;
        console.log("holi", this.props)
        let filteredCityList = this.props.cities
        .filter(city => city.name.toLowerCase() === this.props.match.params.city)
        .map((city) => <Header key={city._id}name={city.name} image={city.image} />);

        
        
        return(
            <div className='contentCities'>
            {itineraryHasErrored && <p>Sorry! There was an error loading the items</p>}
           { itineraryIsLoading &&  <Loader />}
           {!itineraryHasErrored && !itineraryIsLoading &&
           <React.Fragment>
               <div className='citiesList'>
                {filteredCityList}
                </div>
                <h3>Available MYtineraries:</h3>
                <div>
                    {makeItinerarties(this.props.itinerary)}
                </div>
                <div className='link'>
                <Link to={'/cities'}>Choose other city...</Link>
                </div>
           </React.Fragment>
            
           }
       </div>
        )
    }
}





// we take the state and map it to the props of this component
//with state we get acces to the state of the store
const mapStateToProps = (state) => {
    console.log(state)
    return {
        itinerary: state.itinerary,
        itineraryHasErrored: state.itinerarysHasErrored,
        itineraryIsLoading: state.itineraryIsLoading,
        cities : state.cities
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(actionCreator.fetchCities(url))
        };
    };

const makeItinerarties = (arr) =>{
    console.log(arr)
       return arr.map((city) => ItinerarySection(city) )
    }
    

const ItinerarySection = (props) => {
    console.log(props)
    let sentence = getHashtags(props)
    return(
        <div className='singleItinerary'>
            <div>
                <div className='profileInfo'>
                    { !props.author.photo && 
                    <img className='img-circled' src={NoPic} alt={props.author.name}/>}
                    {props.author.photo && 
                    <img className='img-circled' src={props.author.photo} alt={props.author.name}/>}
                    <p>{props.author.name}</p>
                </div>
                <div className='itineraryInfo'>
                    <h5>{props.details.title}</h5>
                    <div>
                        <p>Rating: {props.details.rating}</p>
                        <p>{props.details.time} Hours</p>
                        <p>$ {props.details.price}</p>
                    </div>
                    <div>
                        <p>{sentence}</p>
                    </div>
                </div>
        </div>
        <div className='viewAll'>
            <a href='#'>View all</a>
        </div>
    </div>
    )
    
}

const getHashtags = (props) =>{
    let sentence = "";
   props.hashtags.map((ht) => sentence = `${sentence} #${ht} `);
   return sentence;
}

//connect is a function that return a higher oder componets and wraps our Cities component.
// we pass mapstatetoprops to our connect, so when when we connect to redux
//knows what data we want to grab from redux and the prop we wnat to create to apply this data to it
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
