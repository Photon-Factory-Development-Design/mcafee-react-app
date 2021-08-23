const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '20px !important',
        '&::-moz-focus-inner': {
            border: 0,
            outline: 'none'
        },
        '& svg': {
            fontSize: '20px !important',
            margin: '0px 10px 0px 0px'
        }
    },
    outlined: {
        border: '1px solid #C01818 !important',
        borderRadius: '50px !important',
        fontWeight: 700,
        color: '#333333',
        '&:hover': {
            backgroundColor: 'transparent !important'
        }
    },
    text: {
        color: '#B1BABF',
        fontWeight: 700,
        '&:hover': {
            color: '#71777B',
            backgroundColor: 'transparent !important'
        }
    },
    contained: {
        color: '#FFF',
        fontWeight: 700,
        backgroundColor: '#C01818',
        borderRadius: '50px'
    }
});

export default styles;
