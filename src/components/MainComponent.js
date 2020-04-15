import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
//import FooterLarge from './FooterLarge';
import { HomePage } from './HomeComponents';
import About from './AboutComponent';
import ContactForm from './ContactComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
          
        }
    }

    render() {

        const Home = () => {
            return (
                <HomePage />
            );
        }

        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/about' render={() => <About />} />
                    <Route path='/contact' render={() => <ContactForm />} />
                    <Redirect to='/home' />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Main;