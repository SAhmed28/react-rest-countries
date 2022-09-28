import React from 'react';
import './Country.css'

const Country = (props) => {
    
    // destructuring to get multiple values
    const {area, population, region, flags, name} = props.country;
    return (
        <div className='country bg-light'>
            <h2 className='py-2'>Country: {name.common} </h2>
            <img src={flags.png} alt="flag" />
            <p className='pt-4'>Population: {population}</p>
            <p><small>Area: {area}</small></p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;