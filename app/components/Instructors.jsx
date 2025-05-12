const instructor_data = [
    {name: "Jesus Ortiz", rank: "Cinta Negra", image: "/jesus-ortiz.png", desc: "Profesor especializado en técnicas avanzadas y entrenamiento para competición. Con años de experiencia, ha desarrollado un sistema de enseñanza que prepara a sus alumnos para alcanzar un alto nivel técnico en Jiu-Jitsu."},
    {name: "Willy Flores", rank: "Cinta Cafe 4 grados", image: "/willy-flores.png", desc: "Profesor especializado en fundamentos de Jiu-Jitsu. Su método de enseñanza se enfoca en construir bases sólidas para los practicantes de todos los niveles, asegurando que dominen los movimientos esenciales antes de avanzar a técnicas más complejas."},
    {name: "Alejandro Aldama", rank: "Cinta Cafe 4 Grados", image: "/alejandro-aldama.png", desc: "Lidera nuestro programa infantil de Jiu Jitsu Kids, combinando técnicas de BJJ con actividades divertidas que mantienen a los niños comprometidos mientras aprenden disciplina y autodefensa. Su enfoque en la enseñanza es adaptativo, asegurando que cada niño reciba la atención y el apoyo que necesita para crecer."},

]
export default function Instructors() {
    return (
        <section id="instructores" className="py-16 bg-gray-100 text-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif">Nuestros Instructores</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Instructor Card */}
                    {
                        instructor_data.map(({name, rank, image, desc}) => (
                            <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
                                <div className="h-72 w-full relative flex-shrink-0">
                                    <img
                                        src={`/instructors/${image}`}
                                        alt={name}
                                        className="absolute inset-0 w-full h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6 flex-grow">
                                    <h3 className="text-xl font-bold mb-2">{name}</h3>
                                    <p className="text-gray-700 font-semibold mb-4">{rank}</p>
                                    <p className="text-gray-700">
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}