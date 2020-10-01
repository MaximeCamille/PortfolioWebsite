import React, { Component } from 'react';
import firebase from '../Firebase/fbconfig';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Request extends Component {

    constructor(props) {

        super(props);

        this.state = {
            site: null,
            plan: null,
            user: this.props.user.uid,
            name: this.props.displayName,
            email: this.props.user.email,
            desc: null,
            progress: "Pending approval",
            val: "Select",
            open: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModal = this.handleModal.bind(this);

    }

    handleSubmit(e) {

        e.preventDefault();

        const { site, plan, user, desc, progress, name, email } = this.state;

        firebase.firestore().collection('websites').add({
            site: site,
            plan: plan,
            user: user,
            desc: desc,
            progress: progress,
            name: name,
            email: email
        }).then(() => {
            axios.post('/api/request', {
                site,
                plan,
                user,
                desc,
                progress,
                name,
                email
            });

            document.getElementById("signup-form").reset(); 
            this.setState({open: !this.state.open});
            
        }).catch(error => {
            this.setState({error});
        });

    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleModal(e) {

        e.preventDefault();

        this.setState({open: !this.state.open});

        this.props.handleClick(e);

    }

    render() {

        return (

            <div className="about">

                <form id="signup-form" onSubmit={this.handleSubmit}>

                    <h2>SUBMIT A REQUEST</h2>

                    <div>
                                    
                        {/*<label for="site">Site name:</label>
                        <input type="text" name="site" placeholder="Please add .com at the end." required onChange={this.handleChange}/>*/}

                        <TextField
                            id="outlined-name"
                            label="Website Name"
                            name="site"
                            onChange={this.handleChange}
                            margin="dense"
                            variant="outlined"
                            fullWidth="true"
                            type="text"
                            required
                        />

                    </div>

                    <div>

                        <InputLabel htmlFor="plan">Plan:</InputLabel>
                        <Select native name="plan" onChange={this.handleChange} fullWidth="true">

                            <option value="Select">Select</option>
                            <option value="Basic">Basic</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>

                        </Select>

                    </div>

                    <div>
                                        
                        {/*<label for="desc">Description:</label>
                        <textarea id="area" name="desc" rows="3" cols="40" required onChange={this.handleChange}></textarea>*/}

                        <TextField
                            id="outlined-name"
                            label="Description"
                            name="desc"
                            onChange={this.handleChange}
                            margin="none"
                            variant="outlined"
                            fullWidth="true"
                            type="text"
                            multiline="true"
                            rows="4"
                            required
                        />

                    </div>

                    <div >

                        <button id="req-cancel" type="button" onClick={this.props.handleClick}>BACK</button>

                        <button id="req-submit" type="submit">SUBMIT</button>

                    </div>

                </form>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Thank You!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Thank you for requesting my services, you should receive a email from me within 24 hours.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleModal} color="primary" autoFocus>
                            Okay
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>

        );

    }

}

export default Request;