import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

// styles
import styles from './protectSectionStyle.js';

// constant
import { base_url } from 'common/constant';

// images
const iconImage = `${base_url}/assets/images/icon-1.png`;
const bgImage = {
    desktop: `${base_url}/assets/images/bottom.png`,
    tablet: `${base_url}/assets/images/bottom-tablet.png`,
    mobile: `${base_url}/assets/images/bottom-mobile.png`
};

const ProtectSection = (props) => {
    const { classes } = props;
    const theme = useTheme();

    const md_match = useMediaQuery(theme.breakpoints.up('md'));
    const sm_match = useMediaQuery(theme.breakpoints.up('sm'));
    let _bgImage = bgImage.desktop;

    if (md_match) {
        _bgImage = bgImage.desktop;
    } else if (sm_match) {
        _bgImage = bgImage.tablet;
    } else {
        _bgImage = bgImage.mobile;
    }
    return (
        <Box className={classes.protect_root}>
            <img src={_bgImage} alt="bg" />
            <Container>
                <Box className={classes.container}>
                    <Typography className={classes.section_1}>
                        Protect what matters
                    </Typography>
                    <Typography className={classes.section_3}>
                        McAfee is the online protection cybersecurity company.
                        We protect millions of users around the world and
                        empower them to experience more by making it simpler to
                        be safe online.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default withStyles(styles)(ProtectSection);
