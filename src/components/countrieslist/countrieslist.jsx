import React, { Component } from 'react';
import './countrieslist.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';




export default class CountriesList extends Component{
    state = {
        count: 0,
        countries: [],
        visCountries: [],
        length:0
    };

    componentDidMount = () => {
        const path_name = ('https://restcountries.eu/rest/v2/name/');
        const strlist = ["mal", "rom", "rus"];
        var result= [];

        for (var i=0; i<strlist.length; i++){
            axios.get(path_name + strlist[i]).then(response => {
                result=result.concat(response.data);
                if (i=strlist.length){
                    this.setState({visCountries:result}); 
                }   
            })

        }
    
       /* axios.all([
            
            axios.get(path_name + strlist[0]),
            axios.get(path_name + strlist[1]),
            axios.get(path_name + strlist[2])
          ])
          .then(response => {
              result= result.concat(response[0].data);
              result= result.concat(response[1].data);
              result= result.concat(response[2].data);
              this.setState({visCountries:result});
          });*/

    }



    render() {
        return (
            
            <section className="allCountryList">
              <h2 className="text-danger">From an array of string, write a function that returns a list of countries where their name matches at least a part of one of these string.</h2>
                

                <div className="row copyArea">
                    {this.state.visCountries.map(country => {
                        return (
                            <div className="col-md-4" key={country.alpha2Code}>
                                <div className="card">
                                    <h5 className="card-header alert-info text-info"> {country.name}</h5>
                                    <div className="card-body row">
                                        <div className="col-md-5 text-center"><img className="imgCountry" src={country.flag} alt="flag"/></div>
                                        <div className="col-md-7 desc">
                                            <p><b>Capital: </b> {country.capital}</p>
                                            <p><b>Region:</b> {country.region}</p>
                                            <p><b>Population: </b> {country.population}</p>
                                            <p><b>Area: </b> {country.area}</p>
                                            <p><b>Alpha Code: </b> {country.alpha2Code}</p>
                                        </div>
                                    </div>
                                    <div className="card-footer text-right">
                                        <NavLink to={`/country/${country.alpha2Code}`} className="text-info">Country Detail</NavLink>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}


