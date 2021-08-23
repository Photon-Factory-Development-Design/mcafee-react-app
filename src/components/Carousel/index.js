import React from 'react';

// core components
import Typography from 'components/Typography';
import QuestionItemContainer from 'components/QuestionItemContainer/index';
import QuizCarouselItem from 'components/Carousel/QuizCarouselItem/QuizCarouselItem';

// material ui components
import Box from '@material-ui/core/Box';
import MuiCarousel from 'react-material-ui-carousel';

// utils
import { getQuestion, checkYesNoQuestion } from 'common/constant/questions';

const CarouselItem = ({ questionPath, index, onSelectQuestion }) => {
    const itemQuestion = React.useMemo(
        () => getQuestion(questionPath, index),
        [questionPath, index]
    );

    return (
        <Box>
            <Box py={1}>
                <Typography variant="h3" color="darkBlue" align="center">
                    {itemQuestion.description}
                </Typography>
            </Box>
            {checkYesNoQuestion(itemQuestion) && (
                <Box my={1}>
                    <Typography align="center" variant="h3" color="darkBlue">
                        {itemQuestion.label}
                    </Typography>
                </Box>
            )}
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                flexWrap="wrap">
                {itemQuestion &&
                    itemQuestion.questions.map((question, index) => (
                        <Box
                            key={`question-item-${question.question || index}`}>
                            <Box
                                p={1}
                                height="100%"
                                display="flex"
                                flexDirection="column"
                                alignItems="center">
                                <QuestionItemContainer
                                    onClick={() => onSelectQuestion(index)}
                                    url={question.icon}
                                    hoverURL={question.hoverIcon}
                                    label={
                                        question.icon
                                            ? question.label
                                            : question.question
                                    }
                                />
                            </Box>
                        </Box>
                    ))}
            </Box>
        </Box>
    );
};

const Carousel = ({
    items,
    questionPath,
    activeIndex,
    onSelectQuestion,
    onRetakeQuiz,
    asins,
    setDetailProduct
}) => {
    return (
        <MuiCarousel
            animation="slide"
            index={activeIndex}
            autoPlay={false}
            indicators={false}
            NextIcon={null}
            navButtonsProps={{
                className: '',
                style: {
                    display: 'none'
                }
            }}
            navButtonsWrapperProps={{
                className: '',
                style: {
                    display: 'none'
                }
            }}>
            {items.map((_, index) => (
                <QuizCarouselItem
                    key={index}
                    questionPath={questionPath}
                    index={index}
                    onSelectQuestion={onSelectQuestion}
                    onRetakeQuiz={onRetakeQuiz}
                    asins={asins}
                    setDetailProduct={setDetailProduct}
                />
            ))}
        </MuiCarousel>
    );
};

export default Carousel;
