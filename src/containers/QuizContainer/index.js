import React from 'react';
import { Container, Box } from '@material-ui/core';
import { BackgroundContainer, Typography, Carousel } from 'components';
import ProductContainer from './ProductContainer';
import { getQuestion } from 'common/constant/questions';
import { defaultAsins as DefaultAsins } from 'common/data/products';

const QuizContainer = React.forwardRef((props, ref) => {
    const [questionPath, setQuestionPath] = React.useState([0]);
    const [activeStep, setActiveStep] = React.useState(0);
    const [asins, setAsins] = React.useState(DefaultAsins);

    const onSelectQuestion = (index) => {
        const newQuestionPath = [].concat(
            questionPath.slice(0, activeStep + 1),
            index
        );
        const questionItem = getQuestion(newQuestionPath, activeStep + 1);

        if (questionItem.questions) {
            setQuestionPath(newQuestionPath);
            setActiveStep((prev) => prev + 1);
            //if (!checkYesNoQuestion(questionItem)) {
            let newSteps = [];
            for (var i = 0; i <= activeStep + 1; i++) {
                const questionItem = getQuestion(newQuestionPath, i);
                //if (!checkYesNoQuestion(questionItem)) {
                newSteps.push(questionItem.label);
                //}
            }
            //}
            // clear up asins
            setAsins(DefaultAsins);
        } else {
            // show asins
            setQuestionPath(newQuestionPath);
            setActiveStep((prev) => prev + 1);
            setAsins(questionItem.ASINS);
        }
    };

    const onRetakeQuiz = () => {
        console.log('onRetakeQuiz');
        setQuestionPath([0]);
        setActiveStep(0);
    };

    return (
        <BackgroundContainer ref={ref} color="white" vertical={8}>
            <Container>
                <Carousel
                    items={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    questionPath={questionPath}
                    activeIndex={activeStep}
                    onSelectQuestion={onSelectQuestion}
                    onRetakeQuiz={onRetakeQuiz}
                />
            </Container>

            <Box
                className="adt-results"
                bgcolor="background.primary"
                mt={2}
                pb={6}
                pt={5}>
                <Box mt={5} py={2}>
                    <Typography variant="h3" color="darkBlue">
                        RECOMMENDED FOR YOU
                    </Typography>
                </Box>
                <Box my={2} mt={4}>
                    <Container>
                        <ProductContainer
                            setDetailProduct={props.setDetailProduct}
                            asins={asins}
                        />
                    </Container>
                </Box>
            </Box>
        </BackgroundContainer>
    );
});

export default QuizContainer;
