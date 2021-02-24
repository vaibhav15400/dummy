import React from 'react';
import Header from './Header/Header';
import Content from './Body/Content';
import Symbols from './Symbols/Sybmols';
import Quiz from './Header/Quiz/Quiz';
import OnlineStore from './Header/OnlineStore/OnlineStore';
import {Switch ,Redirect ,Route} from 'react-router-dom';
import Footer from './Footer/Footer';

const Layout =()=>(<>
        <Header />
        <Switch >
            <Route path="/Quiz" exact >
                <Quiz />
            </Route>
            <Route path="/" exact >
            <Content />
            </Route>
            <Route path="/Online_store" exact >
            <OnlineStore />
            </Route>
            <Redirect  to="/" />
        </Switch>
        
        <Symbols/>
        <Footer />
    </>)

export default Layout;