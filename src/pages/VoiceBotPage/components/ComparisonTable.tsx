type ComparisonRow = {
    feature: string;
    us: boolean | string;
    telegram: boolean | string;
};

type ComparisonData = {
    headers: string[];
    rows: ComparisonRow[];
};

type ComparisonTableProps = {
    data: ComparisonData;
};

const renderValue = (value: boolean | string) => {
    if (value === true) {
        return (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#7B2FF7] text-white text-sm">
                ✓
            </span>
        );
    }
    if (value === false) {
        return (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-400 text-sm">
                ✗
            </span>
        );
    }
    return <span className="text-sm text-gray-600">{value}</span>;
};

export const ComparisonTable = ({ data }: ComparisonTableProps) => {
    return (
        <div className="w-full overflow-x-auto">
            {/* Desktop table */}
            <table className="hidden md:table w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        {data.headers.map((header, index) => (
                            <th
                                key={index}
                                className={`py-4 px-4 text-left ${
                                    index === 0
                                        ? 'font-normal text-gray-500 text-sm'
                                        : index === 1
                                        ? 'font-semibold text-[#7B2FF7] text-base'
                                        : 'font-normal text-gray-700 text-sm'
                                }`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, index) => (
                        <tr
                            key={index}
                            className={index < data.rows.length - 1 ? 'border-b border-gray-100' : ''}
                        >
                            <td className="py-4 px-4 text-sm lg:text-base text-black">
                                {row.feature}
                            </td>
                            <td className="py-4 px-4 text-center">
                                {renderValue(row.us)}
                            </td>
                            <td className="py-4 px-4 text-center">
                                {renderValue(row.telegram)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Mobile cards */}
            <div className="md:hidden flex flex-col gap-4">
                {data.rows.map((row, index) => (
                    <div
                        key={index}
                        className="bg-[#F7F7F5] rounded-xl p-4"
                    >
                        <h4 className="font-medium text-black mb-3">{row.feature}</h4>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-[#7B2FF7] font-medium">Наш бот</span>
                                {renderValue(row.us)}
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Telegram</span>
                                {renderValue(row.telegram)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
