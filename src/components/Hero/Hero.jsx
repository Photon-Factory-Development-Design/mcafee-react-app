import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// jss
import styles from './heroStyle';

// constant
import { base_url } from 'common/constant';

const logoURL = `${base_url}/assets/images/logo.png`;
const bgURL = `${base_url}/assets/images/header.png`;

const Hero = ({ classes }) => {
    return (
        <Box className={classes.root}>
            <img src={bgURL} className="background" alt="header-bg" />
            <Container>
                <Box className={classes.logo}>
                    <img src={logoURL} alt="logo" />
                </Box>
                <Typography className={classes.text}>
                    Find the right McAfee service for you.
                </Typography>
            </Container>
        </Box>
    );
};

export default withStyles(styles)(Hero);
