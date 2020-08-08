import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Nav from './components/navigation/nav.jsx';
import Footer from './components/footer/footer.jsx';
import OneCountry from './components/onecountry/onecountry.jsx';
import CountriesList from './components/countrieslist/countrieslist.jsx';
import AllCountries from './components/allcountries/allcountries.jsx';
import Regions from './components/regions/regions.jsx';
import CountryDetail from './components/countrydetail/countrydetail.jsx';
import SignupForm from './components/signup/signup.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="fluid-container">
        <Header />
        <Router>
          <div>
            <Nav />
            <div className="copyArea container">
            <Switch>
            <Route exact path="/" component={OneCountry} />
                <Route path="/onecountry" component={OneCountry} />
                <Route path="/countrieslist" component={CountriesList} />
                <Route path="/signup" component={SignupForm} />
                <Route path="/country/:alpha2Code" component={CountryDetail} />
                <Route path="/:reg" component={AllCountries} />
                
              </Switch>
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
