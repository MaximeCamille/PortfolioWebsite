import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NavDrawer from './pages/Nav';

const history = createBrowserHistory();

class Index extends Component {

    render() {

        return (

            <Router history={history}>

                <App {...this.props}/>

            </Router>

        );

    }
}

const Nav = () => {

    return (
        <div className="navRoot">

            <NavDrawer />

            {/*<ul>

                <li><Link to="/">HOME</Link></li>
                <li><Link to="/Projects">PROJECTS</Link></li>
                <li><Link to="/Skills">SKILLS</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
                <li><Link to="/Services">SERVICES</Link></li>

            </ul>*/}

        </div>
    );
}

ReactDOM.render(
    <Router history={history}>
        <Nav />
    </Router>,
    document.getElementById("header")
);

ReactDOM.render(
        <Index history={history}/>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
