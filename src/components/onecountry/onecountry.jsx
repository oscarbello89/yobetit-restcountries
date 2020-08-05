import React, { Component } from 'react';
import './onecountry.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class OneCountry extends Component{
    componentDidMount (){
        axios.get('https://restcountries.eu/rest/v2/name/malta')
    }
}