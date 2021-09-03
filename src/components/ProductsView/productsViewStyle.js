const styles = () => ({
    tyContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&>img': {
            width: 200
        },
        '&>p': {
            fontSize: 80,
            color: '#B1BABF',
            fontWeight: 300,
            marginBottom: '3rem !important'
        }
    },
    productContainer: {
        backgroundColor: '#F6F6F6',
        padding: '4rem 0rem',
        '&>.title': {
            fontSize: 35,
            fontWeight: 400,
            color: '#000',
            textAlign: 'center',
            paddingBottom: '5rem'
        }
    },
    retakeQuizContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '2rem 0rem'
    },
    otherProdContainer: {
        backgroundColor: '#F6F6F6'
    },
    product_item_container: {
        margin: '0px 10px'
    }
});

export default styles;
