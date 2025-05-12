import { useState, useEffect } from 'react';

export default function ImageCarousel() {
    // State for carousel
      const [currentSlide, setCurrentSlide] = useState(0);
      const totalSlides = 10; // Total number of carousel images

      // Auto-advance the carousel
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="galeria" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-serif">Galería</h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Conoce nuestras instalaciones y entrenamientos a través de nuestra galería de imágenes</p>

                <div className="relative max-w-5xl mx-auto">
                    {/* Carousel container */}
                    <div className="overflow-hidden rounded-lg shadow-2xl h-[450px] md:h-[600px] relative bg-black">
                        {/* Carousel slides */}
                        <div className="relative h-full">
                            {[...Array(totalSlides)].map((_, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${currentSlide === index
                                            ? 'opacity-100 scale-100 z-10'
                                            : 'opacity-0 scale-105 z-0'
                                        }`}
                                >
                                    <img
                                        src={`/galeria/Facebook Image (${index + 4}).jpg`}
                                        alt={`Armada BJJ - Imagen ${index + 1}`}
                                        className="absolute inset-0 w-full h-full object-contain"
                                        loading={index === 0 ? "eager" : "lazy"}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Gradient overlays */}
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-20"></div>
                        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent z-20"></div>

                        {/* Carousel controls */}
                        <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full z-30 transition-all hover:scale-110 focus:outline-none"
                            onClick={() => setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1))}
                            aria-label="Imagen anterior"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full z-30 transition-all hover:scale-110 focus:outline-none"
                            onClick={() => setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1))}
                            aria-label="Imagen siguiente"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Image counter */}
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium z-30">
                            {currentSlide + 1} / {totalSlides}
                        </div>
                    </div>

                    {/* Carousel thumbnails */}
                    <div className="mt-6 flex justify-center overflow-x-auto pb-2 hide-scrollbar">
                        <div className="flex gap-2 px-2 max-w-full">
                            {[...Array(totalSlides)].map((_, index) => (
                                <button
                                    key={index}
                                    className={`relative rounded-md overflow-hidden h-16 w-24 flex-shrink-0 transition-all
${currentSlide === index
                                            ? 'ring-4 ring-blue-600 opacity-100 scale-105'
                                            : 'ring-0 opacity-70 hover:opacity-100'
                                        }`}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Ver imagen ${index + 1}`}
                                >
                                    <img
                                        src={`/galeria/Facebook Image (${index + 4}).jpg`}
                                        alt={`Miniatura ${index + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}