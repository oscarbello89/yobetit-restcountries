import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-dark">
                <div className="container"><p className="author-test"><a href="https://oscarbello.es" target="_top">Oscar Bello</a></p></div>
            </footer>
        );
    }
}

