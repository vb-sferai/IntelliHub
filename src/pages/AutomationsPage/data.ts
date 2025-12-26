// Data types for /automations page

export interface Service {
    title: string;
    description: string;
    icon: 'Bot' | 'Search' | 'BarChart3' | 'Wand2' | 'Plug' | 'MessageSquare';
    isCTA?: boolean;
}

export interface RoadmapStep {
    number: number;
    title: string;
    description: string;
}

// Extended interface for case cards
export interface CaseMetric {
    value: string; // "-75%", "10x", "1000"
    label: string; // "search time reduction"
}

export interface CaseClient {
    isNDA: boolean;
    name?: string; // "STONE" | undefined for NDA
    logo?: string; // Logo path (for public clients)
    industry: string; // "Real Estate Developer" | "EdTech company"
    description?: string; // Additional company description
}

export interface Case {
    id: string;
    badge: string; // "Case Study"
    title: string; // "Smart AI Search"
    subtitle: string; // "Answers from corporate documentation"
    problem: string; // Problem description
    solution: string; // Solution description
    metrics: CaseMetric[]; // Results array
    image?: string; // Image path (mockup/photo)
    client: CaseClient;
}

export interface Client {
    name: string;
    logo: string;
}

export interface CTAOption {
    title: string;
    description: string;
    action: string;
    actionType: 'calendly' | 'email' | 'telegram';
    link: string;
}

// Page content

export const HERO_CONTENT = {
    title: 'We implement the best solutions available on the market, creating turnkey custom automations',
    cta: 'Discuss Project',
};

export const SERVICES: Service[] = [
    {
        title: 'AI Assistants & Chatbots',
        description: 'Smart helpers for managers, support teams, and customers',
        icon: 'Bot',
    },
    {
        title: 'Smart Search & Knowledge Base',
        description: 'Instant answers from corporate documentation',
        icon: 'Search',
    },
    {
        title: 'Monitoring & Analytics',
        description: 'Automated tracking of competitors and market trends',
        icon: 'BarChart3',
    },
    {
        title: 'Content Generation',
        description: 'Visualizations, copy, and marketing materials',
        icon: 'Wand2',
    },
    {
        title: 'Business Process Integration',
        description: 'Connecting AI to your CRM, ERP, and internal systems',
        icon: 'Plug',
    },
    {
        title: 'Custom Development for Your Needs',
        description: 'Contact us — let\'s discuss your challenge and find a solution',
        icon: 'MessageSquare',
        isCTA: true,
    },
];

export const ROADMAP_STEPS: RoadmapStep[] = [
    {
        number: 1,
        title: 'AI Business Analysis',
        description: 'We study your processes and identify growth opportunities',
    },
    {
        number: 2,
        title: 'Strategy',
        description: 'We create an implementation plan with ROI forecast',
    },
    {
        number: 3,
        title: 'Development',
        description: 'We build a solution tailored to your needs',
    },
    {
        number: 4,
        title: 'Deployment',
        description: 'We integrate into your workflows',
    },
];

export const CASES: Case[] = [
    {
        id: '1',
        badge: 'Case Study',
        title: 'Smart AI Search',
        subtitle: '',
        problem:
            'The company faced inefficiency in working with corporate knowledge. With a technical documentation volume of over 10,000 documents, employees spent up to 15% of their working time searching for information. Low quality of classic search for contextual queries.',
        solution:
            'We developed an intelligent semantic search system with the ability to generate answers in natural language.',
        metrics: [
            { value: '-75%', label: 'search time reduction' },
            { value: '-40%', label: 'support tickets' },
            { value: '20→5 min', label: 'average time to find needed information' },
        ],
        image: 'ai-search.png',
        client: {
            isNDA: true,
            industry: 'Home Appliances',
            description: 'One of the largest home appliance brands',
        },
    },
    {
        id: '4',
        badge: 'Case Study',
        title: 'Automated Competitive Landscape Analysis',
        subtitle: '',
        problem:
            'Competitors change prices daily, launch promotions, introduce new installment formats, and update course programs. The company was losing competitive advantages due to the inability to promptly track changes from 20+ competitors across 50+ parameters.',
        solution:
            'Regularly analyzes competitors or product analogues across various parameters (discounts, new products, promotions, functionality, etc.) and generates a report in table format, sending it via email or messenger.',
        metrics: [
            { value: 'Daily', label: 'data updates for 20+ competitors instead of quarterly' },
            { value: '10x', label: 'monitoring coverage: from 200 to 2000+ parameters' },
            { value: '2 hrs', label: 'response time to changes' },
        ],
        image: 'competitors.png',
        client: {
            isNDA: true,
            industry: 'EdTech',
            description: 'NDA project, client — EdTech company',
        },
    },
];


export const CTA_OPTIONS: CTAOption[] = [
    {
        title: 'Express Diagnostics',
        description: 'Free 30-minute call to assess AI potential in your business',
        action: 'Book a Call',
        actionType: 'calendly',
        link: 'https://calendly.com/gurbanov/sfer-intro',
    },
    {
        title: 'Pilot Workshop',
        description: 'Hands-on session with your team to identify automation opportunities',
        action: 'Contact Us',
        actionType: 'email',
        link: 'mailto:human@sfer.ai?subject=Pilot Workshop',
    },
    {
        title: 'Project Discussion',
        description: 'Detailed discussion of your challenge and possible solutions',
        action: 'Message on Telegram',
        actionType: 'telegram',
        link: 'https://t.me/kirill1',
    },
];

// Header navigation
export const NAV_ITEMS = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#roadmap' },
    { label: 'Cases', href: '#cases' },
    { label: 'Contact', href: '#cta' },
];
