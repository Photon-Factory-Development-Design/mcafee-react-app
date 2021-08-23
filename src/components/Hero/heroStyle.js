const styles = (theme) => ({
    root: {
        width: '100%',
        height: '80vh',
        position: 'relative',
        padding: '50px 0px',
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
            height: '50vh'
        }
    },
    logo: {
        width: '20vw',
        [theme.breakpoints.down('md')]: {
            width: '50vw'
        }
    },
    text: {
        fontSize: 70,
        lineHeight: '1',
        fontWeight: 300,
        maxWidth: 500,
        marginTop: '5%',
        [theme.breakpoints.down('md')]: {
            fontSize: 50
        }
    }
});

export default styles;
