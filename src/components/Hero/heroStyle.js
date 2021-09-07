const styles = (theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        padding: '100px 0px',
        overflow: 'hidden',
        '& .background': {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            objectFit: 'cover',
            zIndex: '-1',
            [theme.breakpoints.down('md')]: {
                height: '100%'
            }
        },
        [theme.breakpoints.down('md')]: {
        },
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
        }
    },
    logo: {
        width: '20vw',
        [theme.breakpoints.down('md')]: {
            width: '50vw'
        }
    },
    text: {
        fontSize: 60,
        lineHeight: '1',
        fontWeight: 300,
        maxWidth: 500,
        marginTop: '5%',
        [theme.breakpoints.down('md')]: {
            fontSize: 40
        }
    }
});

export default styles;
