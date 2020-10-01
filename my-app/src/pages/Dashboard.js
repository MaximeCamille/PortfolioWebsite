import React, { Component } from 'react';
import { db } from '../Firebase/fbconfig';
import Request from './Request';
import MaterialTable from 'material-table';
//import MuiThemeProvider from 'material-table';
//import { createMuiTheme } from '@material-ui/core/styles';

class Dashboard extends Component {

    constructor(props) {

        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            displayName: '',
            addReq: false,
            data: [],
            columns: [
                { title: 'Website', field: 'site' },
                { title: 'Description', field: 'desc' },
                { title: 'Plan', field: 'plan' },
                { title: 'Progress', field: 'progress', editable: 'never' },
            ],
            verified: this.props.user.emailVerified
        };

        this.style = {
            borderRadius: 10
        }

    }

    componentDidMount() {

        const user = db.collection('users').doc(this.props.user.uid);

        user.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    displayName: doc.data().displayName
                });
            } else {
                console.log('No such document!');
            }
        })
        .catch((err) => {
            console.log('Error getting document', err);
        });

        db.collection('websites').where('user', '==', `${this.props.user.uid}`).onSnapshot((snapshot) => {

                //console.log(snapshot.docs);

                snapshot.docChanges().forEach((docs) => {

                    let sites = docs.doc.data();

                    //console.log(sites);

                    sites = JSON.stringify(sites);

                    this.setState(prevState => ({
                        data: [...prevState.data, sites]
                    }));

                    //console.log(this.state.data);

                });

        })

    }

    handleClick(e) {

        e.preventDefault();

        this.setState({addReq: !this.state.addReq});

    }

    strToObj(string) {
        let str = JSON.parse(string);
        return str;
    }

    render() {

        //const obj = this.strToObj;

        const user = this.props.user;

        const { data, verified } = this.state;

        const { displayName, addReq } = this.state;

        // Hook: const [open, setOpen] = React.useState(true);

        if (addReq === true) {
            return (
                <Request 
                    user={user}
                    displayName={displayName}
                    handleClick={this.handleClick}
                />
            );
        }

        if (verified === false) {
            return (
                <div className="about">
                
                    <h1>Please check your inbox and verify your email.</h1>
                    <h2>Please refresh page once verified.</h2>

                </div>
            );
        }

        return (

            <div className="about" id="modal">

                <div id="header">

                    <h1>{displayName}</h1>

                </div>

                <div className="requests">
                       
                    <MaterialTable
                        title="Website Requests"
                        columns={this.state.columns}
                        data={data.map(datas => JSON.parse(datas))}
                        style={this.style}
                        options={{
                            pageSizeOptions: [5]
                        }}
                    />

                </div>

                <div className="LoggedIn">

                        <button id="req" type="button" onClick={this.handleClick}>REQUEST</button>

                </div>

            </div>

        );

    }

}

export default Dashboard;