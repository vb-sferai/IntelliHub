import { useEffect, useState } from 'react';
import { AutomationsPage } from './AutomationsPage';
import { CustomAutomationsPage } from '../../CustomAutomationsPage';

/**
 * AutomationsRouter - определяет язык по домену и показывает соответствующую версию
 *
 * ru.sfer.ai/automations → русская версия (AutomationsPage)
 * en.sfer.ai/automations → английская версия (CustomAutomationsPage)
 * localhost → русская версия для тестирования
 */
export const AutomationsRouter = () => {
    const [showRussian, setShowRussian] = useState<boolean | null>(null);

    useEffect(() => {
        const hostname = window.location.hostname;
        // ru.sfer.ai или localhost → русская версия (AutomationsPage)
        // en.sfer.ai, sfer.ai → английская версия (CustomAutomationsPage)
        const isRu = hostname.startsWith('ru.') ||
                     hostname.includes('ru.sfer') ||
                     hostname === 'localhost' ||
                     hostname === '127.0.0.1';
        setShowRussian(isRu);
    }, []);

    // Пока определяем язык, показываем пустой экран (избегаем мерцания)
    if (showRussian === null) {
        return <div className="min-h-screen bg-[#f9f7f4]" />;
    }

    return showRussian ? <AutomationsPage /> : <CustomAutomationsPage />;
};
