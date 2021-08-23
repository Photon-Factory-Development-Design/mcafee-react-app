import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// styles
import styles from './protectSectionStyle.js';

// constant
import { base_url } from 'common/constant';

// images
const iconImage = `${base_url}/assets/images/icon-1.png`;
const bgImage = `${base_url}/assets/images/bottom.png`;

class ProtectSection extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.protect_root}>
                <img src={bgImage} alt="bg" />
                <Container>
                    <Box className={classes.container}>
                        <Typography className={classes.section_1}>
                            Protect what matters
                        </Typography>
                        <Typography className={classes.section_2}>
                            It’s more than just antivirus software—it’s peace of
                            mind.
                        </Typography>
                        <Typography className={classes.section_3}>
                            McAfee is the online protection cybersecurity
                            company. We protect millions of users around the
                            world and empower them to experience more by making
                            it simpler to be safe online.
                        </Typography>
                        <Box className={classes.section_4}>
                            <img src={iconImage} alt="man-head" />
                            <Box>
                                <Typography>
                                    Always-available online security experts
                                </Typography>
                                <Typography>
                                    Get around-the-clock assistance from
                                    McAfee’s expert team.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        );
    }
}

export default withStyles(styles)(ProtectSection);
