const styles = (theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '50px 0px',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column'
        }
    },
    stepText: {
        color: '#B1BABF',
        fontSize: 352,
        fontFamily: 'Open Sans',
        lineHeight: 1,
        [theme.breakpoints.down("xl")]: {
            fontSize: 220
        },
        [theme.breakpoints.down("md")]: {

        }

    },
    quizText: {
        color: '#000',
        fontSize: 90,
        paddingLeft: '40px',
        [theme.breakpoints.down("xl")]: {
            fontSize: 50,
            paddingLeft: '30px',
        },
        [theme.breakpoints.down("md")]: {
            flex: 1,
            paddingTop: '30px'
        }
    },
    quizContainer: {
        width: '40%',
        padding: '80px 0px 0px 40px',
        [theme.breakpoints.down("xl")]: {
            padding: '80px 0px 0px 20px',
        },
        [theme.breakpoints.down("md")]: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%'
        }
    },
    answersContainer: {
        padding: '80px 0px 0px 40px',
    }
})

export default styles;