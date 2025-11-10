import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { useState, useEffect } from "react";

export const NotFoundPage = () => {
    const navigate = useNavigate();
    const [isRussian, setIsRussian] = useState(false);

    useEffect(() => {
        // Check if the domain is ru.sfer.ai or if lang=ru query parameter is present
        const hostname = window.location.hostname;
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');

        setIsRussian(
            hostname.startsWith('ru.') ||
            hostname.includes('ru.sfer') ||
            langParam === 'ru'
        );
    }, []);

    const handleGoHome = () => {
        navigate(ROUTES.root);
    };

    // Translations
    const errorMessage = isRussian
        ? "Упс, похоже эта страница ещё не вайбкожена..."
        : "Oops, looks like this page is not vibecoded yet...";

    const buttonText = isRussian
        ? "На главную"
        : "Go to Homepage";

    return (
        <div className="min-h-screen bg-[#1e1e1e] text-[#cccccc] font-mono flex flex-col overflow-hidden">
            {/* Desktop Version */}
            <div className="hidden md:flex flex-col h-screen">
                {/* Mac OS Top Bar */}
                <div className="h-6 bg-[#2d2d30] flex items-center justify-between px-4 text-xs border-b border-[#3e3e42]">
                    <div className="flex items-center gap-4 overflow-x-auto">
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-white font-medium">Cursor</span>
                            <span className="hidden lg:inline">File</span>
                            <span className="hidden lg:inline">Edit</span>
                            <span className="hidden lg:inline">Selection</span>
                            <span className="hidden lg:inline">View</span>
                            <span className="hidden lg:inline">Go</span>
                            <span className="hidden lg:inline">Run</span>
                            <span className="hidden lg:inline">Terminal</span>
                            <span className="hidden xl:inline">Window</span>
                            <span className="hidden xl:inline">Help</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-[#8b8b8b]">46%</span>
                        <span className="text-[#8b8b8b] hidden lg:inline">Mon Nov 10 11:23</span>
                    </div>
                </div>

                {/* Main IDE Container */}
                <div className="flex-1 flex">
                    {/* Left Sidebar */}
                    <div className="hidden lg:flex w-64 bg-[#252526] border-r border-[#3e3e42] flex-col">
                        {/* Sidebar Header */}
                        <div className="h-9 bg-[#2d2d30] flex items-center px-3 border-b border-[#3e3e42]">
                            <div className="flex gap-3 text-sm">
                                <span className="text-[#8b8b8b] hover:text-white cursor-pointer">Agents</span>
                                <span className="text-white border-b-2 border-[#007acc] pb-1 cursor-pointer">Editor</span>
                            </div>
                        </div>

                        {/* File Explorer */}
                        <div className="flex-1 p-2 text-sm">
                            <div className="text-xs text-[#8b8b8b] uppercase mb-2 px-2">Explorer</div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer group">
                                    <svg className="w-4 h-4 text-[#8b8b8b]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                                    </svg>
                                    <span className="text-[#e06c75] font-bold">404 PAGE</span>
                                </div>
                                <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer">
                                    <svg className="w-3 h-3 text-[#8b8b8b]" fill="none" stroke="currentColor" viewBox="0 0 8 8">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 1l3 3-3 3"></path>
                                    </svg>
                                    <svg className="w-4 h-4 text-[#8b8b8b]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                                    </svg>
                                    <span>docs</span>
                                </div>
                                <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer">
                                    <svg className="w-3 h-3 text-[#8b8b8b]" fill="none" stroke="currentColor" viewBox="0 0 8 8">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 1l3 3-3 3"></path>
                                    </svg>
                                    <svg className="w-4 h-4 text-[#8b8b8b]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                                    </svg>
                                    <span>public</span>
                                </div>
                                <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer">
                                    <svg className="w-3 h-3 text-[#8b8b8b]" fill="none" stroke="currentColor" viewBox="0 0 8 8">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 1l3 3-3 3"></path>
                                    </svg>
                                    <svg className="w-4 h-4 text-[#8b8b8b]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                                    </svg>
                                    <span>src</span>
                                </div>
                                <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer">
                                    <svg className="w-3 h-3 text-[#8b8b8b]" fill="none" stroke="currentColor" viewBox="0 0 8 8">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 1l3 3-3 3"></path>
                                    </svg>
                                    <svg className="w-4 h-4 text-[#8b8b8b]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                                    </svg>
                                    <span>tests</span>
                                </div>
                            </div>

                            {/* Cursorules at bottom */}
                            <div className="mt-auto pt-4">
                                <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer">
                                    <svg className="w-3 h-3 text-[#8b8b8b] rotate-90" fill="none" stroke="currentColor" viewBox="0 0 8 8">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 1l3 3-3 3"></path>
                                    </svg>
                                    <svg className="w-4 h-4 text-[#569cd6]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-[#569cd6]">.cursorules</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="h-24 border-t border-[#3e3e42] p-2">
                            <div className="text-xs text-[#8b8b8b] uppercase mb-1">Outline</div>
                            <div className="text-xs text-[#8b8b8b] uppercase mt-3">Timeline</div>
                        </div>
                    </div>

                    {/* Main Editor Area */}
                    <div className="flex-1 flex flex-col">
                        {/* Tab Bar */}
                        <div className="h-9 bg-[#2d2d30] border-b border-[#3e3e42] flex items-center">
                            <div className="flex items-center">
                                <div className="flex items-center gap-2 px-4 py-1 bg-[#1e1e1e] border-r border-[#3e3e42]">
                                    <svg className="w-4 h-4 text-[#e06c75]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-sm">404 page</span>
                                    <button className="ml-2 text-[#8b8b8b] hover:text-white">
                                        ×
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Editor Content - The 404 Display */}
                        <div className="flex-1 bg-[#1e1e1e] flex items-center justify-center p-4">
                            <div className="text-center">
                                {/* Large 404 */}
                                <div className="text-[120px] md:text-[150px] lg:text-[180px] font-bold text-[#4a4a4a] leading-none mb-4 md:mb-8 select-none animate-pulse">
                                    404
                                </div>

                                {/* Error Message */}
                                <div className="text-base md:text-lg lg:text-xl text-[#8b8b8b] mb-8 md:mb-12 px-4">
                                    {errorMessage}
                                </div>

                                {/* Go to Homepage Button - VS Code Style */}
                                <button
                                    onClick={handleGoHome}
                                    className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-[#0e639c] hover:bg-[#1177bb] text-white text-sm font-medium rounded transition-colors duration-200"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    {buttonText}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="hidden xl:flex w-80 bg-[#252526] border-l border-[#3e3e42] flex-col">
                        {/* Right Panel Header */}
                        <div className="h-9 bg-[#2d2d30] flex items-center justify-between px-3 border-b border-[#3e3e42]">
                            <div className="flex gap-3 text-sm">
                                <span className="text-white border-b-2 border-[#007acc] pb-1 cursor-pointer">New Chat</span>
                                <span className="text-[#8b8b8b] hover:text-white cursor-pointer">Terminal</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="text-[#8b8b8b] hover:text-white text-lg">+</button>
                                <button className="text-[#8b8b8b] hover:text-white">⋮</button>
                            </div>
                        </div>

                        {/* Chat Content */}
                        <div className="flex-1 p-4">
                            <div className="text-sm text-[#8b8b8b] mb-4">
                                What shall I do? I'm lost here...
                            </div>

                            <div className="flex gap-2 text-xs mb-4">
                                <button className="px-2 py-1 bg-[#2a2d2e] rounded hover:bg-[#3e3e42] transition-colors">
                                    Agent
                                </button>
                                <button className="px-2 py-1 bg-[#2a2d2e] rounded hover:bg-[#3e3e42] transition-colors">
                                    Composer 1
                                </button>
                            </div>

                            <div className="text-xs text-[#8b8b8b]">
                                <span className="text-[#569cd6]">◉</span> Local
                            </div>
                        </div>

                        {/* Chat Input */}
                        <div className="p-4 border-t border-[#3e3e42]">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Type to search for commands..."
                                    className="flex-1 bg-[#3c3c3c] border border-[#3e3e42] rounded px-3 py-1.5 text-sm text-[#cccccc] placeholder-[#8b8b8b] focus:outline-none focus:border-[#007acc]"
                                    disabled
                                />
                                <button className="text-[#8b8b8b] hover:text-white p-1">
                                    <span className="text-xs">Tab</span>
                                </button>
                            </div>
                            <div className="text-xs text-[#8b8b8b] mt-2 text-center">
                                <span>Shift</span> <span className="mx-1">Tab</span> <span>to plan</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="h-6 bg-[#007acc] flex items-center justify-between px-3 text-xs text-white">
                    <div className="flex items-center gap-2 md:gap-4">
                        <span className="hidden md:inline">◉ 0 △ 0</span>
                        <span>Cursor Tab</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <span className="hidden lg:inline">kirill-404</span>
                        <span className="hidden md:inline">UTF-8</span>
                        <span className="hidden lg:inline">TypeScript React</span>
                        <span>Ln 1, Col 1</span>
                    </div>
                </div>
            </div>

            {/* Mobile Version - Simplified */}
            <div className="md:hidden flex flex-col h-screen">
                {/* Mobile Header */}
                <div className="h-12 bg-[#2d2d30] flex items-center justify-between px-4 border-b border-[#3e3e42]">
                    <div className="flex items-center gap-2">
                        <span className="text-white font-medium text-sm">Cursor</span>
                        <span className="text-[#8b8b8b] text-xs">404.tsx</span>
                    </div>
                    <button className="text-[#8b8b8b] hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Content */}
                <div className="flex-1 bg-[#1e1e1e] flex items-center justify-center p-6">
                    <div className="text-center w-full max-w-sm">
                        {/* Line numbers decoration */}
                        <div className="flex justify-center mb-6">
                            <div className="text-[#5a5a5a] text-xs font-mono text-left mr-4">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                            </div>
                            <div className="text-left">
                                {/* Large 404 */}
                                <div className="text-[100px] font-bold text-[#4a4a4a] leading-none mb-6 select-none animate-pulse">
                                    404
                                </div>
                            </div>
                        </div>

                        {/* Error Message */}
                        <div className="text-sm text-[#8b8b8b] mb-8 px-2">
                            {errorMessage}
                        </div>

                        {/* Go to Homepage Button - Mobile */}
                        <button
                            onClick={handleGoHome}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0e639c] hover:bg-[#1177bb] active:bg-[#1177bb] text-white text-sm font-medium rounded transition-colors duration-200 touch-manipulation"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            {buttonText}
                        </button>
                    </div>
                </div>

                {/* Mobile Status Bar */}
                <div className="h-10 bg-[#007acc] flex items-center justify-center px-4 text-xs text-white">
                    <span>Cursor Tab • Line 404 • Column 0</span>
                </div>
            </div>
        </div>
    );
};