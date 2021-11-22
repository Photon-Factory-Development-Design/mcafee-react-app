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
const tableImage = `${base_url}/assets/images/mcafee-table.jpg`;

const ProtectSection = (props) => {
    const { classes } = props;
    return (
        <Box className={classes.protect_root}>
            <Container>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    className={classes.container}>
                    <Box>
                        <Typography className={classes.section_1}>
                            Protect what matters
                        </Typography>
                        <Typography className={classes.section_3}>
                            McAfee is the online protection cybersecurity
                            company. We protect millions of users around the
                            world and empower them to experience more by making
                            it simpler to be safe online.
                        </Typography>
                    </Box>
                    <Box>
                        <img src={tableImage} alt="table" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default withStyles(styles)(ProtectSection);
