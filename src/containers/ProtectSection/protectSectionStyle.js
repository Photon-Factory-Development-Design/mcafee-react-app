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
            [theme.breakpoints.down('md')]: {
                height: '100%',
                //transform: 'translateX(-50%)',
                objectFit: 'full',
                objectPosition: 'right'
            }
        },
        padding: '10% 0px'
    },
    container: {
        maxWidth: 700
    },
    section_1: {
        fontSize: 70,
        lineHeight: 1,
        fontWeight: 300,
        paddingBottom: 30
    },
    section_2: {
        fontSize: 20,
        lineHeight: 1,
        fontWeight: 600,
        paddingBottom: 30
    },
    section_3: {
        maxWidth: '80%',
        fontSize: 16,
        fontWeight: 300,
        paddingBottom: 90
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
