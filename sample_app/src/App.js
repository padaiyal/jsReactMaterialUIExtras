import React from 'react';
import './App.css';
import AppFooter from './AppFooter';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';


/**
 * Sample React app with routes to components and a footer.
 */
class App extends React.Component {

    render() {
        return (
        <div>
            <BrowserRouter>
                <Route exact path="/" component={Home}/>

                {/*You can add a component to this route.*/}
                <AppFooter copyRightText={'Company Name © ' + (new Date().getFullYear()).toString()} contactText='Contact Us' contactLink='contact-us'/>
            </BrowserRouter>    
        </div>
        
        )
    }

}

export default App

