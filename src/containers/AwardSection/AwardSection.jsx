import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';

// styles
import styles from './awardSectionStyle';

// images

class AwardSection extends React.Component {
    render() {
        const { classes } = this.props;
        return <Box className={classes.award_root}></Box>;
    }
}

export default AwardSection;
