import React from 'react';
import {Link} from 'react-router-dom';



export default class Footer extends React.Component{
   /* constructor(props){
        super(props);
        this.state ={
            scrImg : homeDisabled
        }
    }
    componentDidMount(){
        this.findRoute();
    }
    findRoute = () => {
        console.log(this.state)
       if ( this.props.location.pathname !== '/'){
        console.log(this.props.location !== '/')

            this.setState({
                srcImg : {homeIcon}
            });
         
       }
       console.log( this.setState({
        srcImg : {homeIcon}
    }))
       console.log({homeIcon})
    } */
    render(){
        return (
            <Link className="homeIcon" to='/'>
                    <img src={this.props.image} alt='homeicon'/>
                   
            </Link>
        )
    }
}