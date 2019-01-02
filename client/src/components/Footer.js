import React from 'react';
import Carousel from './Carousel'

export default class Footer extends React.Component{
    render(){
        return (
            <div className="popularCities">
                    <h2 className="carouselTitle">Popular MYtineraries</h2>
                    <Carousel />
            </div>
        )
    }
}