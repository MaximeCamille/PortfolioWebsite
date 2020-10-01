import React, { Component } from 'react';
import creatist from './pics/Creatist.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

class Projects extends Component {

    render() {

        return (

            <div className="about">
    
                <h1>PROJECTS</h1>

                <div className="project-grid">

                        {/*<div className="card">

                            <div className="img">

                                <img src={creatist} alt="Max" width="375" height="262"/>

                            </div>

                            <div className="info">

                                <div className="info-title">

                                    <h1>Creatist&copy;</h1>

                                </div>

                                <div className="sub-info">

                                    <h3 id="desc">A social app for creatives.</h3>
                                    <h3 id="date">Coming Soon...</h3>

                                    <div className="tech">

                                        <h5 id="by">By: Maxime Camille</h5>
                                        <h5 id="stack">Swift</h5>

                                    </div>

                                </div>

                            </div>

                        </div>*/}

                        <Card>

                            <CardActionArea>

                                <CardMedia
                                    component="img" 
                                    image={creatist}
                                    title="Logo"
                                    style={{
                                        maxWidth: 345
                                    }}
                                />

                                <CardContent>

                                    <Typography variant="h5" component="h2">Creatist &copy;</Typography>

                                    <Divider variant="middle" classes={{root: 'divRoot', middle: 'divMiddle'}}/>

                                    <div className="card-content">

                                        <Typography variant="body1" color="textPrimary" component="p">

                                            A social app for creatives.

                                        </Typography>

                                        <Typography variant="body2" color="textSecondary">Coming Soon...</Typography>

                                    </div>

                                </CardContent>

                                <CardActions classes={{root: 'CAroot', spacing: 'CAspacing'}} disableSpacing>

                                    <Typography variant="caption">By: Maxime Camille</Typography>
                                    <Chip label="Swift" color="primary" classes={{ root: 'chipRoot', colorPrimary: 'chipColor' }}/> 

                                </CardActions>

                            </CardActionArea>

                        </Card>

                    </div>

            </div>

        );

    }

}

export default Projects;