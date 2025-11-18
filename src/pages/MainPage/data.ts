import KirillImg from '../../assets/imgs/kirill.png';
import ArtemImg from '../../assets/imgs/artem-frolov.jpg';
import ListIcon from '../../assets/imgs/list-checked.svg';
import PersonIcon from '../../assets/imgs/person-display.svg';
import AudioIcon from '../../assets/imgs/audio-console.svg';
import CategoryIcon from '../../assets/imgs/category-icon.svg';
import DrawIcon from '../../assets/imgs/draw.svg';
import GroupIcon from '../../assets/imgs/people-group.svg';
import AiIcon from '../../assets/imgs/machine-learning-model.svg';

// Note: I've used the product titles from your "Our Products" section.
// The sections for "AI Strategist Adaptation" and "Community" were not in the final text, 
// so I've commented them out. You can delete them or add translations if needed.
export const PRODUCTS = [
    {
        iconUrl: ListIcon,
        title: 'AI Diagnostics',
        text: 'Quick audit of tasks, teams, and processes.',
        list: [
            'Up to 30% increase in process efficiency',
            'Faster pilot launch and implementation',
            'Tailored AI roadmap for your business',
        ],
    },
    {
        iconUrl: PersonIcon,
        title: 'Intro AI Workshops',
        text: 'Immersive sessions on GenAI tools and business use cases.',
        list: [
            'Clear explanations + guided practice',
            'Learn from real-world examples',
            'Understand how to apply AI in daily tasks',
        ],
    },
    {
        iconUrl: AudioIcon,
        title: 'AI Skills for Teams', // Assuming this maps to "Development and implementation of custom AI agents"
        text: 'Practical training to integrate AI into everyday workflows.',
        list: [
            'Build AI literacy across roles and teams',
            'Learn prompt design and automation',
            'Develop a shared AI culture in your company',
        ],
    },
    {
        iconUrl: CategoryIcon,
        title: 'Executive AI Consulting', // Assuming this maps to "Customized educational programs"
        text: '1:1 strategic AI sessions for C-level leaders and decision-makers.',
        list: [
            'Identify and prioritize high-impact AI opportunities',
            'Align AI strategy with business objectives',
            'Accelerate implementation across departments',
        ],
    },
    /*
    {
        iconUrl: DrawIcon,
        title: 'AI Strategist Adaptation', // Needs translation
        text: 'Preparation of internal AI leaders and ambassadors of change',
        list: [
            'The company has a clear role profile (what an AI evangelist should be able to do)',
            'A new specialist or internal leader receives an implementation map and support at the start',
            'In the first 90 days, 1-2 real pilots are launched, the economic effect is visible',
            'The company forms a core of AI competencies, independent of external contractors',
        ],
    },
    */
    /*
    {
        iconUrl: GroupIcon,
        title: 'Community', // Needs translation
        text: '',
        list: [
            'Constant support for implementations',
            'Exchange of practices and rapid growth due to the environment',
            'Maintaining interest in AI and regular solution upgrades',
        ],
    },
    */
    {
        iconUrl: AiIcon,
        title: 'AI Advisor for CEO and Top Teams',
        text: 'Individual AI navigation track: from strategies to simulations and real-time solutions',
        list: [
            'The top team speaks a single AI "language" and makes decisions faster',
            'Managers have a set of proven tools for analysis, planning, and people management',
            'The company receives a list of real scenarios for using AI in business',
            'The CEO receives personal support for strategic decisions',
        ],
    },
];

export const CASES = [
    {
        client: 'Wealth Management Company',
        request: 'The goal was to integrate AI tools into everyday work across all roles and increase overall productivity.',
        results: [
            {
                title: '85%',
                text: 'of employees use AI tools daily in workflows',
            },
            {
                title: '70%',
                text: 'of routine queries resolved via GPT assistant within the first 2 weeks',
            },
            {
                title: '5 min',
                text: 'average response time reduced from 1 hour to 5 minutes',
            },
            {
                title: '52',
                text: 'ready-to-use prompts created for key scenarios (finance, presale, legal, HR)',
            },
            {
                title: '12',
                text: 'AI agents deployed for quality, sales, finance, and executive dashboards',
            },
            {
                title: '100%',
                text: 'prompts reviewed for data security compliance',
            },
        ],
        stack: 'ChatGPT Enterprise, Yandex GPT, n8n, Cursor, RAGDB (vector database), Power BI + Bloomberg GPT, Miro, Whisper / Coqui',
    },
];

// Note: Event dates and links are left as they were. You might want to update them.
export const EVENTS = [
    {
        date: 'September 23',
        title: 'Open Webinar for HR',
        text: 'Human First, AI Fast',
        speaker: 'Kirill Gurbanov',
        speakerRole: 'Founder of SFER AI, co-founder and board member of SMLT Bank, Chief Digital Officer at MTS Bank, EX корпорат с восьмилетним опытом работы',
        speakerPhotoUrl: KirillImg,
        link: 'https://t.me/kgrbnv_bot?start=dl-1757939498db45602a124c',
    },
    {
        date: 'October 1',
        title: 'Bootcamp',
        text: 'Introduction to AI Agents',
        speaker: 'Artem Frolov',
        speakerRole: 'Founder of Veyalab, former Head of Product at Collextr, Product Manager at T-Bank',
        speakerPhotoUrl: ArtemImg,
        link: 'https://ai.gurbanov.ru/agents',
    },
];
