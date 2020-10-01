import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db, auth } from '../Firebase/fbconfig';
import TextField from '@material-ui/core/TextField';

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fName: '',
            lName: '',
            email: '',
            password: '',
            confirmpass: '',
            error: null,
            open: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {

        this.setState({[e.target.name]: e.target.value});

    }

    handleSubmit(e) {

        e.preventDefault();

        const { fName, lName, email, password, confirmpass } = this.state;

        if (password !== confirmpass) {
            alert("The passwords do not match. Try again.");
        } else {

            auth.createUserWithEmailAndPassword(email, password)
            .then(cred => {

                auth.currentUser.sendEmailVerification().then(() => {
                    this.setState({open: !this.state.open});
                }).catch(error => {
                    this.setState({error});
                });

                return db.collection('users').doc(cred.user.uid).set({
                    displayName: `${fName} ${lName}`,
                    email: email
                });
            })
            .then(() => {
                this.props.history.push('/Services');
            })
            .catch(error => {
                this.setState({error});
            })
        }

    }

    render() {

        return (

            <div className="about">

                <div className="signup">

                    <form id="signup-form" onSubmit={this.handleSubmit}>

                        <h2>SIGN UP</h2>

                        <div>
                                        
                            {/*<label for="fName">First Name:</label>
                            <input type="text" name="fName" placeholder="First Name" required onChange={this.handleChange}/>*/}

                            <TextField
                                id="outlined-name"
                                label="First Name"
                                name="fName"
                                onChange={this.handleChange}
                                margin="dense"
                                variant="outlined"
                                fullWidth="true"
                                type="text"
                                required
                            />

                        </div>

                        <div>

                            {/*<label for="lName">Last Name:</label>
                            <input type="text" name="lName" placeholder="Last Name" required onChange={this.handleChange}/>*/}

                            <TextField
                                id="outlined-name"
                                label="Last Name"
                                name="lName"
                                onChange={this.handleChange}
                                margin="dense"
                                variant="outlined"
                                fullWidth="true"
                                type="text"
                                required
                            />

                        </div>

                        <div>
                                            
                            {/*<label for="email">Email:</label>
                            <input type="email" name="email" placeholder="Email" required onChange={this.handleChange}/>*/}

                            <TextField
                                id="outlined-name"
                                label="Email"
                                name="email"
                                onChange={this.handleChange}
                                margin="dense"
                                variant="outlined"
                                fullWidth="true"
                                type="email"
                                required
                            />

                        </div>

                        <div>

                            {/*<label for="password">Password:</label>
                            <input type="password" name="password" placeholder="Password" required onChange={this.handleChange}/>*/}

                            <TextField
                                id="outlined-name"
                                label="Password"
                                name="password"
                                onChange={this.handleChange}
                                margin="dense"
                                variant="outlined"
                                fullWidth="true"
                                type="password"
                                required
                            />

                        </div>

                        <div>

                            {/*<label for="confirmpass">Confirm:</label>
                            <input type="password" name="confirmpass" placeholder="Confirm Password" required onChange={this.handleChange}/>*/}

                            <TextField
                                id="outlined-name"
                                label="Confirm Password"
                                name="confirmpass"
                                onChange={this.handleChange}
                                margin="dense"
                                variant="outlined"
                                fullWidth="true"
                                type="password"
                                required
                            />

                        </div>

                        <div>

                            <button type="submit">SUBMIT</button>

                        </div>

                        <div>

                            <Link to="/Login" id="loginbtn"><p>Already signed up? Log in.</p></Link>

                        </div>

                    </form>

                </div>

            </div>

        );

    }

}

export default Signup;