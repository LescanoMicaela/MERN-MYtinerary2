import React from 'react';
import Cities from './Cities';
import Login from './LogIn';
import SignUp from './SignUp';
import Notfound from './NotFound';
import HomePage from './Home';
import Header from './Header';
import Footer from './Footer2nd';
import homeIcon from '../assets/images/home.png';
import {
    Route,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom';

export default class PageRouter extends React.Component{
  render(){
    return(
      <Router>
        <div className='container'>
       <Header />


  {/* Switch will pick only the first matching Route if two routes start with /cities, wont render both of them*/}
           <Switch>
             <Route exact path="/" component={HomePage} />
             <Route path="/cities" component={Cities} />
             <Route path="/login" component={Login} />
             <Route path="/signup" component={SignUp} />
  {/* render if the URL matches no location */}
             <Route component={Notfound} />
           </Switch>
           <Footer location={this.props.location} image={homeIcon} />
         </div>
       </Router>
     )
   }


  }

    