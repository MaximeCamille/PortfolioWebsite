import React, { Component } from 'react';
import { auth } from '../Firebase/fbconfig';
import TextField from '@material-ui/core/TextField';
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

        const { email } = this.state;

        auth.sendPasswordResetEmail(email).then(() => {
            this.setState({open: !this.state.open});
        }).catch((error) => {
            this.setState({error});
        });

    }

    handleModal(e) {

        e.preventDefault();

        this.setState({open: !this.state.open});

        this.props.history.push('/Login');

    }

    render() {

        return (

            <div className="about">

                <div className="login">

                    <form onSubmit={this.handleSubmit}>

                        <h2>Forgot Password</h2>

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

                            <button type="submit">SUBMIT</button>

                        </div>

                    </form>

                    <Dialog
                        open={this.state.open}
                        onClose={this.handleModal}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Email Sent"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                If this email exist, You should receive a message with a link to reset your password.
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
