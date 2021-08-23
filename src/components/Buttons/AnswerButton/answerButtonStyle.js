const styles = () => ({
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '0px !important',
        '&.active': {
            borderBottom: '1px solid #C01818 !important',
            background: 'transparent'
        },
        '&:hover': {
            borderBottom: '1px solid #C01818 !important',
            background: 'transparent'
        },
        color: '#000',
        textTransform: 'none',
        '& svg': {
            fontSize: '30px !important',
            fontWeight: 300,
        }
    },
    label: {
        fontSize: 30,
        paddingRight: 20,
        fontWeight: 300
    }
});

export default styles;
