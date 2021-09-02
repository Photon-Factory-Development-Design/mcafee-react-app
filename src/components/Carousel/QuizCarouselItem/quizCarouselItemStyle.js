const styles = (theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '50px 0px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            padding: '10px 0px'
        }
    },
    stepText: {
        color: '#B1BABF',
        fontSize: 352,
        fontFamily: 'Open Sans',
        lineHeight: 1,
        fontWeight: 300,
        [theme.breakpoints.down('xl')]: {
            fontSize: 220
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 100,
            textAlignment: 'center'
        }
    },
    quizText: {
        color: '#000',
        fontSize: 90,
        paddingLeft: '40px',
        fontWeight: 300,
        [theme.breakpoints.down('xl')]: {
            fontSize: 50,
            paddingLeft: '30px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 30,
            paddingTop: '30px'
        }
    },
    imageContainer: {
        maxWidth: 700,
    },
    quizContainer: {
        padding: '80px 0px 0px 40px',
        [theme.breakpoints.down('xl')]: {
            padding: '80px 0px 0px 20px'
        },
        [theme.breakpoints.down('md')]: {
            padding: '20px 0px 0px 10px',
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }
    },
    answersContainer: {
        padding: '80px 0px 0px 40px'
    }
});

export default styles;
