import type { ScheduleClass } from "~/data/scheduleData";

interface ClassCellProps {
    classInfo: ScheduleClass | null;
}

const getClassStyles = (type: string | undefined) => {
    switch (type) {
        case 'adults':
            return {
                bg: 'bg-blue-100',
                card: 'bg-blue-600'
            };
        case 'kids':
            return {
                bg: 'bg-green-100',
                card: 'bg-green-600'
            };
        case 'openmat':
            return {
                bg: 'bg-purple-100',
                card: 'bg-purple-600'
            };
        default:
            return {
                bg: '',
                card: ''
            };
    }
};

export function ClassCell({ classInfo }: ClassCellProps) {
    if (!classInfo) return <div className="p-1 border-r border-gray-200"></div>;

    const styles = getClassStyles(classInfo.type);

    return (
        <div className={`p-1 border-r border-gray-200 ${styles.bg}`}>
            <div className={`${styles.card} text-white rounded p-1 text-xs text-center`}>
                <div className="flex items-center justify-center">
                    {classInfo.type === 'kids' && (
                        <svg className="w-3 h-3 mr-1 inline" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                        </svg>
                    )}
                    <p className="font-medium inline">{classInfo.title}</p>
                </div>
                <p className="text-xs">{classInfo.subtitle}</p>
            </div>
        </div>
    );
}
