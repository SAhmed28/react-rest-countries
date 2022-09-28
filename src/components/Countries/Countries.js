import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Hello From {countries.length} Countries</h1>
            <div className="country-container">
                {
                    // pass the object
                    countries.map(country => <Country 
                        country = {country}
                        key = {country.cca3}    // for the console error and for react management
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;