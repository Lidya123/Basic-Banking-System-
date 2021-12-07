import {BrowserRouter, Switch, Route}  from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import AddCustomers from './components/AddCustomers'
import ViewCustomers from './components/ViewCustomers'
import TransHistory from './components/TransHistory'
import Header from './components/Header'

export default function RouterPage(){
    return(
      <div>
        
        <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={Header} />
                    <Route path ="/components/AddCustomers" component={AddCustomers} />
                    <Route path="/components/ViewCustomers" exact component={ViewCustomers} />
                    <Route path="/components/TransHistory" exact component={TransHistory} /> 
                
                </Switch>

        </BrowserRouter>
        
      </div>
    );
}

