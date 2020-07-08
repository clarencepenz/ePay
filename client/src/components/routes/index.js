import React from 'react'
import { Router } from '@reach/router';
import Home from '../sections/Home';
import Success from '../sections/Success';
import Stripe from '../utils/Stripe';
import Header from '../sections/Header';





const Route = () => (
        <div>
           <Header/>
            <Router>
              <Home path='/'/>
              <Stripe path='/pay'/>
              <Success path='/success'/>
            </Router>
            
        </div>
    )


export default Route