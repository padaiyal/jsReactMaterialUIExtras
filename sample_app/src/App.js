import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AppFooter from './AppFooter';
import Home from './Home';
import NavBar from './NavBar';
import companyLogo from './companyLogo.png';

/**
 * Sample React app with a navigation bar, routes to components, and a footer.
 */
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    1: {
                        title: "Tab One",
                        link: "tab-one"
                    }   
                },
                {
                    2: {
                        title: "Tab Two",
                        link: "tab-two"
                    }   
                },
                {
                    3: {
                        title: "Tab Three",
                        link: "tab-three"
                    }    
                },
                {
                    4: {
                        title: "Tab Four",
                        link: "tab-four"
                    }    
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavBar companyLogo={companyLogo} tabs={this.state.tabs}/>
                    <Route exact path="/" component={Home}/>
                    {/*You can add a component to this route.*/}
                    <AppFooter copyRightText={'Company Name © ' + (new Date().getFullYear()).toString()} contactText='Contact Us' contactLink='contact-us'/>
                </BrowserRouter>    
            </div>
        )
    }
}

export default App

