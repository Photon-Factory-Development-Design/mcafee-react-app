import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { QuizContainer, ProductDetailDialog } from 'containers';
import './assets/styles/base.scss';
import { db, firebase_console } from 'common/firebase';
import { setOfferings } from 'common/data/offerings';

// core components
import Hero from 'components/Hero/Hero';
import AwardSection from 'containers/AwardSection/AwardSection';
import ProtectSection from 'containers/ProtectSection/ProtectSection';
import Footer from 'containers/Footer/Footer';

function App() {
    const [open, setOpen] = React.useState(false);
    const [product, setDetailProduct] = React.useState(null);

    const quizRef = React.useRef(null);

    React.useEffect(() => {
        if (product) {
            setOpen(true);
        }
    }, [product]);

    React.useEffect(() => {
        firebase_console
            .auth()
            .signInWithEmailAndPassword(
                'phoenix.ts1991@gmail.com',
                'Samzu777##'
            )
            .then(() => {
                db.ref(`/labvGn2UNma4bJnkLKmhTpjuyzT2/offering`).on(
                    'value',
                    (snapshot) => {
                        const offerings = [];
                        snapshot.forEach((snap) => {
                            offerings.push({
                                ...snap.val()
                            });
                        });

                        console.log('offerings', offerings);
                        setOfferings(offerings);
                    },
                    (error) => {
                        console.log('error', error);
                    }
                );
            });
    }, []);

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Hero />
                <QuizContainer
                    ref={quizRef}
                    setDetailProduct={setDetailProduct}
                />
                <ProtectSection />
                <ProductDetailDialog
                    open={open}
                    setOpen={setOpen}
                    product={product}
                />
                <AwardSection />
                <Footer />
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
