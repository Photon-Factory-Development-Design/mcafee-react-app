const styles = (theme) => ({
    footer_root: {
        position: 'relative',
        overflow: 'hidden',
        '&>img': {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '&>p': {
            fontWeight: 400,
            textAlign: 'center',
            padding: '5px 0px'
        },
        '&>p:nth-child(1)': {
            fontSize: 50,
            color: '#FFF',
            [theme.breakpoints.down('md')]: {
                fontSize: 30
            }
        },
        '&>p:nth-child(2)': {
            color: '#FFF',
            fontSize: 16
        },
        '& button': {
            marginTop: '30px',
            '&>span': {
                fontSize: 13,
                textTransform: 'none'
            }
        }
    },
    shopButton: {
        backgroundColor: '#00aeef'
    }
});

export default styles;
