import React from 'react';
import { Link } from 'react-router-dom'

const CityButton = (props) => {
    return (
        <div style={{backgroundImage: `url(${props.image})`}}>
            <Link to={`/itinerary/${props.name.toLowerCase()}`}>{props.name}</Link>>
        </div>
    )
}

export default CityButton;