import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import McaFeeButton from 'components/Buttons/McaFeeButton/McaFeeButton';

// styles
import styles from './footerStyle';

// constants
import { base_url } from 'common/constant';

// images
const bgImage = `${base_url}/assets/images/footer-bg.jpg`;

class Footer extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.footer_root}>
                <img src={bgImage} alt="world" />
                <Container>
                    <Box className={classes.container}>
                        <Typography>
                            Shop McAfee protection solutions.{' '}
                        </Typography>
                        <Typography>Visit our Amazon store to learn more.</Typography>
                        <a href="https://amazon.com/mcafee">
                            <McaFeeButton variant="contained" className={classes.shopButton}>
                                Shop Now
                            </McaFeeButton>
                        </a>
                    </Box>
                </Container>
            </Box>
        );
    }
}

export default withStyles(styles)(Footer);
