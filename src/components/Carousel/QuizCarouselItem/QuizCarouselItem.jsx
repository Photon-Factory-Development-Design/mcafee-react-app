import React from 'react';

// material ui icons
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import ProductsView from 'components/ProductsView/ProductsView';
import McaFeeButton from 'components/Buttons/McaFeeButton/McaFeeButton';

// styles
import styles from './quizCarouselItemStyle';

// constant
import { base_url } from 'common/constant';
import AnswerButton from 'components/Buttons/AnswerButton/AnswerButton';

// utils
import { getQuestion } from 'common/constant/questions';

// icons
import ReplayIcon from '@material-ui/icons/Replay';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const quizImages = [
    `${base_url}/assets/images/quiz-images/AdobeStock_198775715.png`,
    `${base_url}/assets/images/quiz-images/shutterstock_278513663.png`,
    `${base_url}/assets/images/quiz-images/MCAFEE_DAY3_SHOT6_4750.png`,
    `${base_url}/assets/images/quiz-images/Clip.png`
];

/**
 * Props: { questionPath, index, onSelectQuestion }
 */
class QuizCarouselItem extends React.Component {
    render() {
        const {
            classes,
            index,
            questionPath,
            onSelectQuestion,
            onRetakeQuiz,
            onPrevStep
        } = this.props;
        const itemQuestion = getQuestion(questionPath, index);

        const quizImage = quizImages[index];
        console.log(questionPath, index, itemQuestion);
        if (!itemQuestion) {
            return <Skeleton variant="rect" width="100%" height={700} />;
        }
        if (!itemQuestion.questions) {
            return (
                <ProductsView
                    asins={this.props.asins}
                    setDetailProduct={this.props.setDetailProduct}
                    onRetakeQuiz={onRetakeQuiz}
                />
            );
        }

        return (
            <Container maxWidth={'lg'}>
                <Box className={classes.container}>
                    <Box className={classes.imageContainer}>
                        <img src={quizImage} alt="quizImage" />
                        {index > 0 && (
                            <McaFeeButton variant="text" onClick={onRetakeQuiz}>
                                <ReplayIcon />
                                Retake Quiz
                            </McaFeeButton>
                        )}
                        {index > 0 && (
                            <McaFeeButton variant="text" onClick={onPrevStep}>
                                <ArrowBackIcon />
                                Previous
                            </McaFeeButton>
                        )}
                    </Box>
                    <Box className={classes.quizContainer}>
                        <Typography className={classes.stepText}>
                            {index + 1}
                        </Typography>
                        <Typography className={classes.quizText}>
                            {itemQuestion.description || itemQuestion.label}
                        </Typography>

                        <Box className={classes.answersContainer}>
                            {itemQuestion &&
                                itemQuestion.questions.map(
                                    (question, index) => (
                                        <AnswerButton
                                            key={index}
                                            label={question.question}
                                            onClick={() =>
                                                onSelectQuestion(index)
                                            }
                                        />
                                    )
                                )}
                        </Box>
                    </Box>
                </Box>
            </Container>
        );
    }
}

export default withStyles(styles)(QuizCarouselItem);
