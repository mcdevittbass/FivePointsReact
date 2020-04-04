import React, { Component } from 'react';
import Header from './HeaderComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <Header />
            </React.Fragment>
        );
    }
}

export default Main;