const styles = (theme) => ({
    award_root: {
        position: 'relative',
        overflow: 'hidden',
        '&>img': {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '150%',
            objectFit: 'cover',
            zIndex: -1,
            [theme.breakpoints.down('md')]: {
                height: '150%',
                objectPosition: 'center'
            }
        },
        padding: '5% 0px'
    },
    container: {
        '&>p': {
            fontSize: 22,
            fontWeight: 600,
            color: '#fff',
            textAlign: 'center',
            paddingBottom: 50,
            [theme.breakpoints.down('md')]: {
                paddingBottom: 20
            },
            [theme.breakpoints.down('sm')]: {
                paddingBottom: 0
            }
        }
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },

        '&>img': {
            maxWidth: 150,
            margin: '0px 20px',
            [theme.breakpoints.down('md')]: {
                margin: '10px 0px'
            }
        }
    }
});

export default styles;
