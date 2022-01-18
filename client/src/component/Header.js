import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments'

class Header extends Component {
    renderContent(){
        console.log(this.props.auth);
        switch (this.props.auth) { //this is from action.payload
            case null :
                return;
            case false :
                return <li><a href="auth/google">Login With Google</a></li>;
            default :
                return [<li><Payments/></li>,
                        <li><a href="/api/logout">Logout</a></li>
                        ]
                        //we using array 
        }
    }
    render() {
        console.log(this.props)
        return(
            <nav className="nav-wrapper">
                <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo"> 
                {/* this link using ternary */}
                    Emaily
                </Link>
                <ul className="right">  
                       {this.renderContent()}
                </ul>

            </nav>
        )
    }
}

function mapStateToProps ({auth}){
    return { auth }
}

export default connect(mapStateToProps)(Header);