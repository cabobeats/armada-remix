export default function OpenMat() {
    return (
        <section id="openmat" className="py-16 bg-blue-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white font-serif">Open Mat</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Práctica Libre</h3>
                        <p className="text-gray-100 mb-6">
                            Nuestras sesiones de Open Mat están abiertas para practicantes de todas las academias de forma gratuita, todos los sábados en punto de las 3:00 PM. Es el momento perfecto para poner en práctica las técnicas aprendidas durante la semana y ganar experiencia real en un ambiente colaborativo.
                        </p>
                        <ul className="space-y-2 text-gray-100">
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Todos los sábados a las 3:00 PM
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Acceso gratuito para practicantes de cualquier academia
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Refuerza técnicas aprendidas durante la semana
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Ambiente amigable y constructivo para todos los niveles
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                        <img
                            src="/Facebook Image (3).jpg"
                            alt="Open Mat en Armada BJJ"
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}