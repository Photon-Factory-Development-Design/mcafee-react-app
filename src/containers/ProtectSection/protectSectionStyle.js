const styles = (theme) => ({
    protect_root: {
        position: 'relative',
        '&>img': {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            objectFit: 'cover',
            zIndex: -1,
            height: '100%',
            [theme.breakpoints.down('xs')]: {
                height: 'auto',
                //transform: 'translateX(-50%)',
                objectFit: 'unset',
                position: 'relative'
            }
        },
        padding: '100px 0px',
        [theme.breakpoints.down('sm')]: {
            padding: '50px 0px'
        }
    },
    container: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },

        '&>*': {
            flex: 1,

            [theme.breakpoints.down('sm')]: {
                margin: '10px 0px'
            }
        }
    },
    section_1: {
        fontSize: 70,
        lineHeight: 1,
        fontWeight: 300,
        paddingBottom: 30,

        [theme.breakpoints.down('sm')]: {
            fontSize: 40,

            paddingBottom: 10
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 40,
            textAlign: 'center'
        }
    },
    section_2: {
        fontSize: 20,
        lineHeight: 1,
        fontWeight: 600,
        paddingBottom: 30
    },
    section_3: {
        fontSize: 24,
        fontWeight: 400,
        paddingBottom: 90,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,

            paddingBottom: 0
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
            marginTop: 10,
            textAlign: 'center',
            margin: 'auto',

            paddingBottom: 0
        }
    },
    section_4: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '&>div': {
            padding: '0px 20px',
            '&>p': {
                fontSize: 15,
                fontWeight: 300
            },
            '&>p:nth-child(1)': {
                fontWeight: 600
            }
        }
    }
});

export default styles;
