import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

// jss
import styles from './heroStyle';

// constant
import { base_url } from 'common/constant';

const logoURL = `${base_url}/assets/images/logo.png`;
const bgURL = {
    desktop: `${base_url}/assets/images/header.png`,
    tablet: `${base_url}/assets/images/header-tablet.png`,
    mobile: `${base_url}/assets/images/header-mobile.png`
};

const Hero = ({ classes }) => {
    const theme = useTheme();
    const md_match = useMediaQuery(theme.breakpoints.up("md"));
    const sm_match = useMediaQuery(theme.breakpoints.up("sm"));
    let _bgUrl = bgURL.desktop;

    if (md_match) {
        _bgUrl = bgURL.desktop;
    } else if (sm_match) {
        _bgUrl = bgURL.tablet;
    } else {
        _bgUrl = bgURL.mobile;
    }
    return (
        <Box className={classes.root}>
            <img src={_bgUrl} className="background" alt="header-bg" />
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
