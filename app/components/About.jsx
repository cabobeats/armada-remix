const bullets = [
    {desc: 'Clases para niños desde los 5 años'},
    {desc: 'Grupos de adultos principiantes y avanzados'},
    {desc: 'Instructores certificados y con experiencia'},
    {desc: 'Afiliados oficialmente a la academia Renzo Gracie'},
]
export default function About() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif text-black">Sobre Nosotros</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-black">Entrenamientos para Todas las Edades</h3>
                        <p className="text-gray-700 mb-6">
                            En Armada BJJ ofrecemos clases especializadas tanto para niños como para adultos. Nuestro programa está diseñado para desarrollar disciplina, confianza y habilidades de defensa personal mientras mejoras tu condición física.
                        </p>
                        <p className="text-gray-700 mb-6 font-medium">
                            Nos enorgullece ser parte del prestigioso linaje de Renzo Gracie, bajo la guía del Profesor Sean Alvarez. Esta afiliación nos permite ofrecer la más alta calidad de enseñanza en Jiu-Jitsu Brasileño, siguiendo metodologías probadas que han formado campeones mundiales.
                        </p>
                        <ul className="space-y-2">
                            {bullets.map(({desc}) => (
                                <li className="flex items-center text-black">
                                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {desc}
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className="rounded-lg overflow-hidden flex items-center justify-center p-5">
                        <div className="transform rotate-animation">
                            <img
                                src="/Facebook Image (15).jpg"
                                alt="Armada BJJ - Equipo Renzo Gracie"
                                className="w-96 h-auto rounded-full"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}