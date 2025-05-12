export default function Hero() {
    return (
        <section id="inicio" className="relative h-[90vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900 to-indigo-900"></div>
          <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-white text-center">
            <div className="mb-6 w-64 h-auto">
              <img
                src="/Facebook Image (1) (1).png"
                alt="Armada BJJ"
                width={250}
                height={120}
                className="object-contain"
                loading="eager"
              />
            </div>
            <p className="text-xl md:text-2xl mb-8">Jiu-Jitsu Brasileño para Niños y Adultos</p>
            <a
              href="https://wa.me/526181114689?text=Hola,%20me%20interesa%20información%20sobre%20las%20clases%20de%20BJJ"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">Contáctanos por WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>
    )
}