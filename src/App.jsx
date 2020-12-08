
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './AboutUs';
import ContactUs from './ContactUs';
import Header from './Header';

import Home from './Home';
import Error from './Error'
import Footer from './Footer';
import Login from './Login';
import SignUp from './SignUp';
import Detail from './Detail';
import Wheather from './Wheter';
function App() {
  
        document.title = "Home";

    return (

        <>

            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact={true} component={Wheather} />
                    <Route path="/contactUs/" exact={true} component={ContactUs} />
                    <Route path="/login/" exact={true} component={Login} />
                    <Route path="/SignUp/" exact={true} component={SignUp} />
                    <Route path="/Details/" exact={true} component={Detail} />
                    <Route path="/wheather" exact={true} component={Wheather} />
                    <Route path="/" exact={true} component={Home} />
                    <Route component={Home} />
                </Switch>
                <Footer />
            </BrowserRouter>

        </>
    );
}

export default App;