export type ClassType = 'adults' | 'kids' | 'openmat';

export interface ScheduleClass {
    type: ClassType;
    title: string;
    subtitle: string;
}

export interface TimeSlot {
    time: string;
    classes: {
        [key: number]: ScheduleClass | null; // 0 = Lunes, 6 = Domingo
    };
}

export const scheduleData: TimeSlot[] = [
    {
        time: "06:40 AM - 07:40 AM",
        classes: {
            0: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            1: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            2: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            3: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            4: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            5: null,
            6: null
        }
    },
    {
        time: "01:00 PM - 02:00 PM",
        classes: {
            0: null,
            1: null,
            2: null,
            3: null,
            4: null,
            5: { type: 'kids', title: 'BJJ Kids', subtitle: '6-15 años' },
            6: null
        }
    },
    {
        time: "03:00 PM - 04:00 PM",
        classes: {
            0: null,
            1: null,
            2: null,
            3: null,
            4: null,
            5: null,
            6: { type: 'openmat', title: 'Open Mat', subtitle: 'Todos los niveles' }
        }
    },
    {
        time: "04:00 PM - 05:00 PM",
        classes: {
            0: { type: 'kids', title: 'BJJ Kids', subtitle: '6-15 años' },
            1: { type: 'kids', title: 'BJJ Kids', subtitle: '6-15 años' },
            2: { type: 'kids', title: 'BJJ Kids', subtitle: '6-15 años' },
            3: { type: 'kids', title: 'BJJ Kids', subtitle: '6-15 años' },
            4: { type: 'kids', title: 'BJJ Kids', subtitle: '6-15 años' },
            5: null,
            6: null
        }
    },
    {
        time: "07:00 PM - 08:00 PM",
        classes: {
            0: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            1: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            2: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            3: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            4: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            5: null,
            6: null
        }
    },
    {
        time: "08:00 PM - 09:00 PM",
        classes: {
            0: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            1: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            2: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            3: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            4: { type: 'adults', title: 'Adultos', subtitle: 'Todos los niveles' },
            5: null,
            6: null
        }
    }
];
