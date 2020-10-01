import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { auth } from '../Firebase/fbconfig';
import Dashboard from './Dashboard';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Services extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            tiers: [
                {
                    title: 'Basic',
                    price: '1,000',
                    description: [
                        '1-3 page site', 
                        'Basic design & animations', 
                        'No backend', 
                        'Time: 1 - 2 weeks'
                        ],
                    buttonText: 'Sign up for free',
                    buttonVariant: 'outlined',
                },
                {
                    title: 'Intermediate',
                    subheader: 'Best Deal',
                    price: '2,250',
                    description: [
                        '3-5 page site',
                        'Moderate design & animations',
                        'Backend included',
                        'Time: 2 - 4 weeks',
                    ],
                    buttonText: 'Sign up for free',
                    buttonVariant: 'outlined',
                },
                {
                    title: 'Advanced',
                    price: '5,000',
                    description: [
                        '6-10 page site',
                        'In-depth design & animations',
                        'Backend included',
                        'Time: 4 - 8 weeks',
                    ],
                    buttonText: 'Sign up for free',
                    buttonVariant: 'outlined',
                },
              ]
        }

    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
            } else {
                this.setState({user: null});
            }
        });
    }

    render() {

        const { tiers, user } = this.state;

        if (user) {
            return (
                <Dashboard user={user}/>
            );
        }

        return (

            <div className="about">
    
                <h1>SERVICES</h1>

                <Container maxWidth="sm" component="main" className='heroContent'>

                    {/*<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom
                        classes={{ gutterBottom: 'gutterBot' }}>
                        Plans
                    </Typography>*/}

                    <Typography variant="h5" align="center" color="textSecondary" component="p">
                        Need a website? Check out my services, sign up, and request one.
                    </Typography>

                </Container>

                <Container>

                    <Grid container spacing={5} alignItems="flex-end">

                        {tiers.map(tier => (

                            <Grid item key={tier.title} xs={12} sm={tier.title === 'Advanced' ? 12 : 6} md={4}>

                                <Card>

                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{ align: 'center' }}
                                        subheaderTypographyProps={{ align: 'center' }}
                                        className='cardHeader'
                                    />

                                    <CardContent>
                                        <div className='cardPricing'>
                                            <Typography component="h2" variant="h3" color="textPrimary">
                                                ${tier.price}
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                /site
                                            </Typography>
                                        </div>
                                        <ul className="ul">
                                            {tier.description.map(line => (
                                                <Typography component="li" variant="subtitle1" align="center" key={line} className="li">
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                    </CardContent>

                                    <CardActions>

                                        <Link component={RouterLink} to="/Sign-up" className="Link" underline="none">

                                            <Button fullWidth variant={tier.buttonVariant} color="primary">
                                                {tier.buttonText}
                                            </Button>

                                        </Link>

                                    </CardActions>

                                </Card>

                            </Grid>

                        ))}

                    </Grid>

                </Container>

                    {/*<div className="services-grid">

                        <div className="card">

                            <div className="img">

                                <img src={Basic} alt="Max" width="375" height="262"/>

                            </div>

                            <div className="info">

                                <div className="info-title">

                                    <h1>Basic Site</h1>

                                </div>

                                <div className="sub-info">

                                    <h3 id="desc">A plan for basic websites.</h3>

                                    <div className="includes">

                                        <h4>Includes:</h4>

                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                            <li>...</li>
                                        </ul>

                                    </div>

                                    <div className="SGButton">

                                        <Link to="/Login" className="Link"><button>CHOOSE</button></Link>

                                    </div>
                                    

                                </div>

                            </div>

                        </div>

                        <div className="card">

                            <div className="img">

                                <img src={Basic} alt="Max" width="375" height="262"/>

                            </div>

                            <div className="info">

                                <div className="info-title">

                                    <h1>Intermediate Site</h1>

                                </div>

                                <div className="sub-info">

                                    <h3 id="desc">A plan for basic websites.</h3>

                                    <div className="includes">

                                        <h4>Includes:</h4>

                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                            <li>Minimal Backend</li>
                                        </ul>

                                    </div>

                                    <div className="SGButton">

                                        <Link to="/Login" className="Link"><button>CHOOSE</button></Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="card">

                            <div className="img">

                                <img src={Basic} alt="Max" width="375" height="262"/>

                            </div>

                            <div className="info">

                                <div className="info-title">

                                    <h1>Advanced Site</h1>

                                </div>

                                <div className="sub-info">

                                    <h3 id="desc">A plan for basic websites.</h3>

                                    <div className="includes">

                                        <h4>Includes:</h4>

                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                            <li>Full Backend</li>
                                        </ul>

                                    </div>

                                    <div className="SGButton">

                                        <Link to="/Login" className="Link"><button>CHOOSE</button></Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>*/}

            </div>

        );

    }

}

export default Services;