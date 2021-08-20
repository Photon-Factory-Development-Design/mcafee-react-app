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
            margin: '0px 10px'
        }
    },
    outlined: {
        border: '1px solid #C01818',
        borderRadius: '50ox',
        color: '#FFF',
        fontWeight: 700
    },
    text: {
        color: '#B1BABF',
        fontWeight: 700,
        '&:hover': {
            color: '#71777B'
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
