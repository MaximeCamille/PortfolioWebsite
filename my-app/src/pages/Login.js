import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/fbconfig';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            open: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModal = this.handleModal.bind(this);

    }

    handleChange(e) {

        this.setState({[e.target.name]: e.target.value});

    }

    handleSubmit(e) {

        e.preventDefault();

        const { email, password } = this.state;

        auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            this.props.history.push('/Services/Dashboard');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                this.setState({open: !this.state.open});
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });

    }

    handleModal(e) {

        e.preventDefault();

        this.setState({open: !this.state.open});

    }

    render() {

        return (

            <div className="about">

                <div className="login">

                    <form onSubmit={this.handleSubmit}>

                        <h2>LOGIN</h2>

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
                            <input type="password" name="password" id="pass" placeholder="Password" required onChange={this.handleChange}/>*/}

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

                            <button type="submit">LOGIN</button>

                        </div>

                        <div>

                            <Link to="/Sign-up" id="loginbtn"><p>Not signed up? Sign up.</p></Link>

                        </div>

                        <Divider variant="middle" style={{ backgroundColor: "#000000" }}/>

                        <div>

                            <Link to="/Forgot-PW" id="forgotpass"><p>Forgot Password</p></Link>

                        </div>

                    </form>

                    <Dialog
                        open={this.state.open}
                        onClose={this.handleModal}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Wrong username / password."}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Please try again.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleModal} color="primary" autoFocus>
                                Okay
                            </Button>
                        </DialogActions>
                    </Dialog>

                </div>

            </div>

        );

    }

}

export default Login;