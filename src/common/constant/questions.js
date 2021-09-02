const questions = {
    questions: [
        {
            description: 'Do you shop or bank online?',
            questions: [
                {
                    question: 'Yes',
                    label: 'Do you connect to a Wi-Fi?',
                    questions: [
                        {
                            question: 'Yes',
                            label: 'Want to build good digital habits for your kids?',
                            questions: [
                                {
                                    question: 'Yes',
                                    ASINS: ['B08SHTW92W', 'B07K995RWG'],
                                },
                                {
                                    question: 'No',
                                    description: 'How many devices need coverage?',
                                    label: 'How many devices need coverage?',
                                    questions: [
                                        {
                                            question: '1-3',
                                            ASINS: ['B07K98XDX8']
                                        },
                                        {
                                            question: '4-5',
                                            ASINS: ['B07K98LLVV']
                                        },
                                        {
                                            question: 'Too many to count',
                                            ASINS: ['B08SHTW92W', 'B07K995RWG']
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            question: 'No',
                            label: 'Want to build good digital habits for your kids?',
                            questions: [
                                {
                                    question: 'Yes',
                                    ASINS: ['B07BFRVMMN', 'B07K995RWG'],
                                },
                                {
                                    question: 'No',
                                    label: 'How many devices need coverage?',
                                    questions: [
                                        {
                                            question: '1-3',
                                            ASINS: ['B07BFS3G7P', 'B07K98XDX8']
                                        },
                                        {
                                            question: '4-5',
                                            ASINS: ['B07BFRYH2K', 'B07K98LLVV']
                                        },
                                        {
                                            question: 'Too many to count',
                                            ASINS: ['B07BFRVMMN', 'B07K995RWG']
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    question: 'No',
                    label: 'Do you connect to a Wi-Fi?',
                    questions: [
                        {
                            question: 'Yes',
                            label: 'Want to build good digital habits for your kids?',
                            questions: [
                                {
                                    question: 'Yes',
                                    ASINS: ['B08SHTW92W', 'B07K995RWG'],
                                },
                                {
                                    question: 'No',
                                    description: 'How many devices need coverage?',
                                    label: 'How many devices need coverage?',
                                    questions: [
                                        {
                                            question: '1-3',
                                            ASINS: ['B07K98XDX8']
                                        },
                                        {
                                            question: '4-5',
                                            ASINS: ['B07K98LLVV']
                                        },
                                        {
                                            question: 'Too many to count',
                                            ASINS: ['B08SHTW92W', 'B07K995RWG']
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            question: 'No',
                            label: 'Want to build good digital habits for your kids?',
                            questions: [
                                {
                                    question: 'Yes',
                                    ASINS: ['B07BFRVMMN', 'B07K995RWG'],
                                },
                                {
                                    question: 'No',
                                    label: 'How many devices need coverage?',
                                    questions: [
                                        {
                                            question: '1 PC',
                                            ASINS: ['B07BFRR94X']
                                        },
                                        {
                                            question: 'More than 1',
                                            ASINS: ['B07BFT3S12']
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
            ]
        }
    ]
};

export const getQuestion = (questionPath, index) => {
    let currentQuestions = questions;
    for (var i = 0; i <= index; i++) {
        if (questionPath.length <= i) {
            return null;
        }

        const questionIndex = questionPath[i];

        currentQuestions = currentQuestions.questions[questionIndex];
    }

    return currentQuestions;
};

export const checkYesNoQuestion = (question) => {
    return (
        question.questions.length === 2 &&
        question.questions[0].question === 'Yes' &&
        question.questions[1].question === 'No'
    );
};

export default questions;
