import React from 'react';

// material ui components
import MuiButton from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

// styles
import styles from './mcaFeeButtonStyle.js';

class McaFeeButton extends React.Component {
    render() {
        const { ...props } = this.props;
        return <MuiButton {...props} />;
    }
}

export default withStyles(styles)(McaFeeButton);
