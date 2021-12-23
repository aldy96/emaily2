import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'; //pull out all action and assign it to object called "actions"


import Header from './Header';
import Landing from './Landing';


//const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
    return(
        <div className='container'>
            <BrowserRouter>  {/*can only one child*/}

                <Header/>
                <Route exact={true} path='/' component={Landing}  />
                <Route exact={true} path="/surveys" component={Dashboard} />
                <Route exact={true} path="/surveys/new" component={SurveyNew} />

            </BrowserRouter>
        </div>
    )
}
};

export default connect(null, actions)(App);