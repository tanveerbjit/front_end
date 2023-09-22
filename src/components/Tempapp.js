import React, { useEffect, useState } from 'react';
import './css/style.css';

const Tempapp = () => {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState('');
    useEffect(() => {
        const fetchApi = async()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=aeb528cf6381f971c6841d6a6acd63dd`;
            const response = await fetch(url);
            const data = await response.json();
            setcity(data.main);

        }
        fetchApi();
    }, [search]);

    return (
        <>
        <div className="container">

        <h1>Weather App</h1>
            <div className="box">
                <div className="search">
                    <input type="text" placeholder="Write City Name.." name="search2" onChange={(event) => {
                        setcity(event.target.value);
                        setsearch(event.target.value);
                    }} onKeyUp={(event) => {
                        if (event.keyCode === 13) {
                            setcity(null);
                            setsearch("");

                        }
                    }} value={search} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>
                {
                    !city ? (
                        <h3> No data Found</h3>
                    ):(
                            <div className="info">
                                <h2 className="location"><i className="fas fa-street-view person"></i>{search.toUpperCase()}</h2>
                                    <h1 className="temp"><i className="fas fa-thermometer-half"></i> {city.temp}°C</h1>
                                <h3 className="tempmin_max"> <i className="fas fa-temperature-low"></i> Min : {city.temp_min}°C | <i className="fas fa-temperature-high"></i>  Max : {city.temp_max}°C</h3>
                            </div>
                    )
                }  
            </div>
        </div>
        </>
    )
}

export default Tempapp;
