import { scheduleData } from "../data/scheduleData";
import { ClassCell } from "./ClassCell";

const DAYS = [
    { short: 'L', full: 'Lunes' },
    { short: 'M', full: 'Martes' },
    { short: 'M', full: 'Miércoles' },
    { short: 'J', full: 'Jueves' },
    { short: 'V', full: 'Viernes' },
    { short: 'S', full: 'Sábado' },
    { short: 'D', full: 'Domingo' }
];

export default function Horarios() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif text-black">Horarios de Clases</h2>
                <div className="flex justify-center mb-8">
                    <img
                        src="/Facebook Image (1) (1).png"
                        alt="Armada BJJ"
                        width={150}
                        height={75}
                        className="object-contain"
                        loading="lazy"
                    />
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <div className="min-w-[700px]">
                            <div className="grid grid-cols-8 bg-gray-800 text-white text-center font-medium text-xs sm:text-sm">
                                <div className="py-3 border-r border-gray-700"></div>
                                {DAYS.map((day, index) => (
                                    <div key={index} className="py-3 border-r border-gray-700">
                                        <span className="sm:hidden">{day.short}</span>
                                        <span className="hidden sm:inline">{day.full}</span>
                                    </div>
                                ))}
                            </div>

                            
                            {scheduleData.map((slot, index) => (
                                <div key={index} className="grid grid-cols-8 border-b border-gray-200 min-h-[40px]">
                                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">
                                        {slot.time}
                                    </div>
                                    {[...Array(7)].map((_, dayIndex) => (
                                        <ClassCell
                                            key={dayIndex}
                                            classInfo={slot.classes[dayIndex]}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                        <span className="text-sm text-gray-600">Clase de Adultos</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-600 rounded mr-2"></div>
                        <span className="text-sm text-gray-600">Clase de Niños</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-purple-600 rounded mr-2"></div>
                        <span className="text-sm text-gray-600">Open Mat</span>
                    </div>
                </div>
            </div>
        </section>
    );
}