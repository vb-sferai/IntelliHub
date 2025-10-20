import {QuestionsBlockItem} from "./QuestionBlockItem.tsx";

const questions = [
    {
        question: 'How is Sfer.AI different from agencies or large consulting firms?',
        answer: 'We are not a factory of generic solutions. Sfer.AI works as a boutique consultancy. We don’t scale one-size-fits-all products, but design AI programs tailored to each client’s needs. Every project starts with diagnostics and customization.',
    },
    {
        question: 'What kind of problems do you solve?',
        answer: 'We work on two levels:\n' +
            '– Strategic: AI diagnostics, goal setting, leadership and team preparation\n' +
            '– Practical: building AI agents, improving workflows, and training employees\n' +
            'Our main difference is that we stay with you through implementation until real results are achieved, not just deliver the training.',
    },
    {
        question: 'Can your programs be adapted to my industry?',
        answer: 'Yes, that is one of our main strengths. We do not offer boxed courses. Whether it is fintech, retail, or real estate, we design each program around your business context and processes.',
    },
    {
        question: 'How much time will the training take for my team?',
        answer: 'We plan the workload carefully, from about 2–3 hours per week for basic tracks to more in-depth sessions for departments or executives. From the very first module, participants start using AI tools in their real work tasks.',
    },
    {
        question: 'How do you measure results?',
        answer: 'Each project begins with a baseline assessment that includes process metrics, speed, and engagement. Together, we define measurable goals such as time saved, efficiency growth, or cost reduction. These KPIs are tracked throughout and after implementation.',
    },
    {
        question: 'Is it safe for company data?',
        answer: 'Yes. We create a secure framework for working with AI, train employees to handle confidential information correctly, and use only verified tools. All decisions are coordinated with your internal IT and security teams.',
    },
    {
        question: 'Who will I work with directly?',
        answer: 'You will work with experienced practitioners: AI strategists, product managers, researchers, and solution designers. We do not outsource our projects. The Sfer.AI team handles everything in-house, and for deep sessions we invite industry experts. You will also have a personal manager and a support team from your first consultation.',
    },
];

export const QuestionsBlock = () => {
    return (
        <div className="flex flex-col w-full lg:w-192 mt-8 lg:mt-16 xl:mt-20">
            {questions.map((question, index) => (
                <QuestionsBlockItem question={question.question} answer={question.answer} isLast={questions.length - 1 === index} />
            ))}
        </div>
    );
};
