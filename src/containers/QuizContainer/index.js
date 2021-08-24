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
        <BackgroundContainer ref={ref} color="white" verticalTop={8}>
            {activeStep === 0 && (
                <Box py={2}>
                    <Typography
                        style={{
                            fontSize: 20,
                            fontWeight: 400,
                            color: 'black'
                        }}
                        align="center">
                        Answer these questions to learn more
                    </Typography>
                </Box>
            )}
            <Carousel
                items={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                questionPath={questionPath}
                activeIndex={activeStep}
                onSelectQuestion={onSelectQuestion}
                onRetakeQuiz={onRetakeQuiz}
                asins={asins}
                setDetailProduct={props.setDetailProduct}
            />
        </BackgroundContainer>
    );
});

export default QuizContainer;
