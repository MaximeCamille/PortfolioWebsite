import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import { Link as RouterLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Divider } from '@material-ui/core';
import { auth } from 'firebase';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class Nav extends Component {

    constructor(props) {

        super(props);

        this.state = {
            sideMenu: false,
            logged: false
        }

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModal = this.handleModal.bind(this);

    }

    toggleDrawer() {
        this.setState({
            sideMenu: !this.state.sideMenu
        });
    }


    handleSubmit(e) {

        e.preventDefault();

        auth().signOut()
        .then(() => {
            this.setState({logged: !this.state.logged});
        });

    }

    handleModal(e) {

        e.preventDefault();

        this.setState({logged: !this.state.logged});

    }

    render() {

        let user = auth().currentUser;

        const drawer = (

            <div className="drawer" onClick={this.toggleDrawer}>
    
                <List>
    
                    <Link component={RouterLink} to="/" underline="none">
                        <ListItem button key="ABOUT">
                            <ListItemText primary="ABOUT" style={{ color: "white" }}/>
                        </ListItem>
                    </Link>
    
                    <Link component={RouterLink} to="/Projects" underline="none">
                        <ListItem button key="PROJECTS">
                            <ListItemText primary="PROJECTS" style={{ color: "white" }}/>
                        </ListItem>
                    </Link>
    
                    <Link component={RouterLink} to="/Contact" underline="none">
                        <ListItem button key="CONTACT">
                            <ListItemText primary="CONTACT" style={{ color: "white" }}/>
                        </ListItem>
                    </Link>
    
                    <Link component={RouterLink} to="/Services" underline="none">
                        <ListItem button key="SERVICES">
                            <ListItemText primary="SERVICES" style={{ color: "white" }}/>
                        </ListItem>
                    </Link>
    
                </List>

                <Divider variant="middle" style={{ backgroundColor: "#eeeeee" }}/>

                <List>

                    {(user == null) ?
    
                        <Link component={RouterLink} to="/Login" underline="none">
                            <ListItem button key="LOGIN">
                                <ListItemText primary="LOGIN" style={{ color: "white" }}/>
                            </ListItem>
                        </Link>

                    :

                    <ListItem button key="SIGN OUT" onClick={this.handleSubmit}>
                        <ListItemText primary="SIGN OUT" style={{ color: "white" }}/>
                    </ListItem>

                    }
    
                </List>
    
            </div>
    
        );

        return (
            <>
                <AppBar position="static" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer} edge="start" className="menuButton" color="inherit" aria-label="menu">
                            <MenuIcon color="primary" style={{
                                fontSize: 48,
                                color: "grey"
                            }}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Drawer open={this.state.sideMenu} 
                onClose={this.toggleDrawer}>

                    {drawer}

                </Drawer>

                <Dialog
                    open={this.state.logged}
                    onClose={this.handleModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Success"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            You've been successfully logged out.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleModal} color="primary" autoFocus>
                            Thank you
                        </Button>
                    </DialogActions>
                </Dialog>

            </>
        );

    }

}

export default Nav;