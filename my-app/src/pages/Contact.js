import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

class Contact extends Component {

    constructor(props) {
        super(props);

  
        this.state = {
            fName: '',
            lName: '',
            subject: '',
            email: '',
            message: ''
        }
        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        const {fName, lName, subject, email, message} = this.state;

        axios.post('/api/form', {
            fName,
            lName,
            subject,
            email,
            message
        }).then((resp) => {
            alert("Message Sent.");       
        }).catch((error) => {
            console.log(error);
        });

        document.getElementById('form').reset();
    }

    render() {

        return (

            <div className="about">
        
                <h1>CONTACT</h1>
    
                    <div className="contact">
    
                        <form className="form" id="form" onSubmit={this.handleSubmit}>

                                <div>

                                    <div>
                                        
                                        {/*<label for="fName">First Name:</label>
                                        <input type="text" name="fName" placeholder="First Name" onChange={this.handleChange}/>*/}

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
                                        <input type="text" name="lName" placeholder="Last Name" onChange={this.handleChange}/>*/}

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

                                </div>

                                <div>

                                    {/*<label for="email">Email:</label>
                                    <input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>*/}

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

                                    {/*<label for="subject">Subject:</label>
                                    <input type="text" name="subject" placeholder="Subject" onChange={this.handleChange}/>*/}

                                    <TextField
                                        id="outlined-name"
                                        label="Subject"
                                        name="subject"
                                        onChange={this.handleChange}
                                        margin="dense"
                                        variant="outlined"
                                        fullWidth="true"
                                        type="text"
                                        required
                                    />

                                </div>

                                <div>

                                    {/*<label for="message">Message:</label>
                                    <textarea id="area" name="message" rows="3" cols="40" onChange={this.handleChange}></textarea>*/}

                                    <TextField
                                        id="outlined-name"
                                        label="Message"
                                        name="message"
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

                                <div>
                                    <button type="submit">SUBMIT</button>
                                </div>

                        </form>
    
                    </div>
    
            </div>
    
        )

    }

}

/*
function Contact() {
    return (

        <div className="about">
    
            <h1>CONTACT</h1>

                <div className="sub-about">

                    <form className="form" action="contact.php" method="post">

                        <input type="text" name="first name" placeholder="FirstName" onChange={this.handleChange}/>
                        <input type="text" name="last name" placeholder="LastName" onChange={this.handleChange}/>
                        <input type="text" name="subject" placeholder="Subject" onChange={this.handleChange}/>
                        <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
                        <textarea id="area" name="message" rows="3" cols="40" onChange={this.handleChange}></textarea>
                        <input type="submit" value="SUBMIT"/>

                    </form>

                </div>

        </div>

    );
}
*/

export default Contact;