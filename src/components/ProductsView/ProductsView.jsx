import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// core components
import ProductCard from 'components/ProductCard';
import McaFeeButton from 'components/Buttons/McaFeeButton/McaFeeButton';
import ProductContainer from 'containers/QuizContainer/ProductContainer';

// material ui components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// constant
import { base_url } from 'common/constant';
import { getProducts } from 'common/data/products';

// icons
import ReplayIcon from '@material-ui/icons/Replay';

// styles
import styles from './productsViewStyle';

const thankYouImageURL = `${base_url}/assets/images/quiz-images/thank-you.png`;
const responsive = {
    superLargeDesktop: {
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1
    }
};

class ProductsView extends React.Component {
    render() {
        const { classes, asins, setDetailProduct, onRetakeQuiz } = this.props;
        const products = getProducts(asins, false, true);
        console.log(products);  
        return (
            <Box>
                <Box className={classes.tyContainer}>
                    <img src={thankYouImageURL} alt="thank-you" />
                    <Typography>Thank you</Typography>
                </Box>
                <Box className={classes.productContainer}>
                    <Typography className="title">
                        Based on your profile, here is what we recommend:
                    </Typography>
                    <ProductContainer
                        setDetailProduct={setDetailProduct}
                        asins={asins}
                    />
                </Box>
                <Box className={classes.retakeQuizContainer}>
                    <McaFeeButton variant="outlined" onClick={onRetakeQuiz}>
                        <ReplayIcon />
                        Retake QUIZ
                    </McaFeeButton>
                </Box>
                <Box className={classes.productContainer}>
                    <Typography className="title">
                        Not what you’re looking for? Check out these other
                        McAfee protection solutions.
                    </Typography>
                    <Container>
                        <Carousel arrows={true} responsive={responsive}>
                            {products &&
                                products.map((product, index) => (
                                    <ProductCard
                                        setDetailProduct={setDetailProduct}
                                        key={`product-item-${index}`}
                                        product={product}
                                        {...product.data}
                                    />
                                ))}
                        </Carousel>
                    </Container>
                </Box>
            </Box>
        );
    }
}

export default withStyles(styles)(ProductsView);
