type StreamTabsProps = {
    activeStream: string;
    onStreamChange: (stream: string) => void;
};

export const StreamTabs = ({ activeStream, onStreamChange }: StreamTabsProps) => {
    const streams = [
        { id: 'stream2', label: 'Поток №2', dates: '24 ноября - 8 декабря' },
    ];

    return (
        <div className="flex flex-col sm:flex-row gap-3 mt-8 mb-6">
            {streams.map((stream) => {
                const isActive = activeStream === stream.id;
                return (
                    <button
                        key={stream.id}
                        onClick={() => onStreamChange(stream.id)}
                        className={`
                            px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200
                            ${isActive
                                ? 'bg-black text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }
                            min-w-[160px] sm:min-w-[185px]
                        `}
                    >
                        <div className="flex flex-col gap-0.5">
                            <span className="font-semibold">{stream.label}</span>
                            <span className={`text-xs ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                                {stream.dates}
                            </span>
                        </div>
                    </button>
                );
            })}
        </div>
    );
};
