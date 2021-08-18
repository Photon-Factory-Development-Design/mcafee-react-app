import React from 'react';

// material ui icons
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import withStyles from '@material-ui/core/styles/withStyles';

// styles
import styles from './carouselItemStyle';



class QuizCarouselItem extends React.Component {
    render() {
        return (
            <Container>
                <Box></Box>
            </Container>
        )
    }
}

export default withStyles(styles)(QuizCarouselItem);