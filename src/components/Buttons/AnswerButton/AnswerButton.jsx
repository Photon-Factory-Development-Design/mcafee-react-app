import React from 'react';
import cn from 'classnames'

// material ui components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// material ui icons
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

// styles
import styles from './answerButtonStyle';

class AnswerButton extends React.Component {
    render() {
        const { label, classes, active, ...props } = this.props;
        return (
            <Button variant="text" className={cn(classes.button, { 'active': active })} {...props}>
                <Typography className={classes.label}>{label}</Typography>
                <KeyboardArrowRightIcon />
            </Button>
        )
    }
}

export default withStyles(styles)(AnswerButton);