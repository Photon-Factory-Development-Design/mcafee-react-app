import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// styles
import styles from './awardSectionStyle';

// constants
import { base_url } from 'common/constant';

// images
const worldImage = `${base_url}/assets/images/world.png`;
const logoImages = [
    `${base_url}/assets/images/company-logo-1.png`,
    `${base_url}/assets/images/company-logo-2.png`,
    `${base_url}/assets/images/company-logo-3.png`
];

class AwardSection extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.award_root}>
                <img src={worldImage} alt="world" />
                <Container>
                    <Box className={classes.container}>
                        <Typography>
                            Award-winning internet security. Dependable
                            performance.
                        </Typography>
                        <Box className={classes.logoContainer}>
                            {logoImages.map((logo) => (
                                <img key={logo} src={logo} alt="logo" />
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>
        );
    }
}

export default withStyles(styles)(AwardSection);
