import React, { Component } from 'react';
import './onecountry.css';
import axios from 'axios';
//import { NavLink } from 'react-router-dom';

export default class OneCountry extends Component{
    state = {
        countryDetail: [],
        length:0
    };
    
    componentDidMount (){
        const path_name = ('https://restcountries.eu/rest/v2/name/malta');
        axios.get(path_name).then(response => {
            this.setState({
                countryDetail: response.data,
                length: response.data.length
            });
        });
    }

    render (){
        return (
            <section>
                <h2 className="text-danger">Gets a unique country from a specific name.</h2>
                <div className="countryDetail">
                    <div className="row">
                      <div className="col-md-4">
                        <img src={this.state.countryDetail.map((country) => country.flag)} className="img-fluid" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <h5 className="mt-0">About {this.state.countryDetail.map((country) => country.name)}</h5>
                        <ul>
                        <li>Capital: <b>{this.state.countryDetail.map((country) => country.capital)}</b></li>
                            
                            <li>Capital: <b>{this.state.countryDetail.map((country) => country.capital)}</b></li>
                            <li>Region: <b>{this.state.countryDetail.map((country) => country.region)}</b></li>
                            <li>Sub-region: <b>{this.state.countryDetail.map((country) => country.subregion)}</b></li>
                            <li>Calling Code: <b>{this.state.countryDetail.map((country) => country.callingCodes)}</b></li>
                            <li>Other Name: <b>{this.state.countryDetail.map((country) => 
                                country.altSpellings.map((res)=>{
                                    return res+', '
                                 })
                                )}
                                </b></li>
                            <li>Currency: <b>{this.state.countryDetail.map((country) => 
                                country.currencies.map((res)=>{
                                    return Object.values(res)+', ';
                                    })
                                )}
                            </b></li>
                            <li>Population: <b>{this.state.countryDetail.map((country) => country.population)}</b></li>
                            <li>Demonym: <b>{this.state.countryDetail.map((country) => country.demonym)}</b></li>
                            <li>Area: <b>{this.state.countryDetail.map((country) => country.area)}</b></li>
                            <li>Code: <b>{this.state.countryDetail.map((country) => country.numericCode)}</b></li>
                            <li>Timezone: <b>{this.state.countryDetail.map((country) => country.timezones)}</b></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}