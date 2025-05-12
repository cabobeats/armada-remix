export default function Map() {
    return (
        <section id="ubicacion" className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif text-black">Nuestra Ubicación</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-black">Visítanos</h3>
                        <p className="text-gray-700 mb-6">
                            Estamos ubicados en el centro de Durango, con fácil acceso y estacionamiento cercano.
                        </p>
                        <div className="mb-6">
                            <p className="font-semibold text-gray-800">Dirección:</p>
                            <p className="text-gray-700">Av. 20 de Noviembre 1003-4, Zona Centro, 34000 Durango, Dgo.</p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.5339353539473!2d-104.6698501!3d24.0226504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7e30a865555%3A0x5fe757a8c5cbc082!2sAv.%2020%20de%20Noviembre%201003-4%2C%20Zona%20Centro%2C%2034000%20Durango%2C%20Dgo.%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1649126958694!5m2!1ses!2smx"
                            className="w-full h-full border-0"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación de Armada BJJ en Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}