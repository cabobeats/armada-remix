import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";

// NOTE: Make sure Tailwind CSS is configured in your Remix project.
// NOTE: Ensure the following image paths exist in your `public/` directory:
// /Facebook Image (1) (1).png
// /Facebook Image (15).jpg
// /instructors/Jesus.png
// /instructors/Willy.png
// /instructors/alejandro-photo.png
// /openmat/Facebook Image (3).jpg
// /carrousel pics/Facebook Image (4).jpg through (13).jpg

// NOTE: Define the custom CSS classes 'rotate-animation' and 'hide-scrollbar'
// in your global CSS file (e.g., app/tailwind.css). Example definition provided in chat.

export const meta: MetaFunction = () => {
  return [
    { title: "Armada BJJ - Jiu-Jitsu Durango" },
    { name: "description", content: "Clases de Jiu-Jitsu Brasileño para niños y adultos en Durango. Afiliados a Renzo Gracie." },
  ];
};


export default function Home() {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10; // Total number of carousel images
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll for navbar styling
  useEffect(() => {
    // Run effect only on the client
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page loads scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures this runs once on mount client-side

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-2 shadow-md' : 'bg-transparent py-3'}`}>
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <div className={`flex items-center justify-center transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`}>
            <img
              src="/Facebook Image (1) (1).png"
              alt="Armada BJJ"
              width={70} // Base width
              height={35} // Base height
              className={`object-contain transition-all duration-300 ${scrolled ? 'w-[40px] md:w-[50px]' : 'w-[55px] md:w-[70px]'}`}
              loading="eager" // Equivalent for priority
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className={`relative font-sans transition-colors duration-300 font-semibold tracking-wide text-sm ${scrolled ? 'text-white hover:text-blue-300' : 'text-blue-800 hover:text-blue-600'} after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}>Inicio</a>
            <a href="#instructores" className={`relative font-sans transition-colors duration-300 font-semibold tracking-wide text-sm ${scrolled ? 'text-white hover:text-blue-300' : 'text-blue-800 hover:text-blue-600'} after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}>Instructores</a>
            <a href="#openmat" className={`relative font-sans transition-colors duration-300 font-semibold tracking-wide text-sm ${scrolled ? 'text-white hover:text-blue-300' : 'text-blue-800 hover:text-blue-600'} after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}>Open Mat</a>
            <a href="#galeria" className={`relative font-sans transition-colors duration-300 font-semibold tracking-wide text-sm ${scrolled ? 'text-white hover:text-blue-300' : 'text-blue-800 hover:text-blue-600'} after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}>Galeria</a>
            <a href="#ubicacion" className={`relative font-sans transition-colors duration-300 font-semibold tracking-wide text-sm ${scrolled ? 'text-white hover:text-blue-300' : 'text-blue-800 hover:text-blue-600'} after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}>Ubicacion</a>
            <a href="#contacto" className={`relative font-sans transition-colors duration-300 font-semibold tracking-wide text-sm ${scrolled ? 'text-white hover:text-blue-300' : 'text-blue-800 hover:text-blue-600'} after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}>Contacto</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none ${scrolled ? 'text-white' : 'text-blue-800'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black backdrop-blur-sm py-2">
            <div className="px-4 py-3 space-y-1">
              <a href="#inicio" className="block text-white hover:text-blue-300 py-2 text-center font-medium" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
              <a href="#instructores" className="block text-white hover:text-blue-300 py-2 text-center font-medium" onClick={() => setMobileMenuOpen(false)}>Instructores</a>
              <a href="#openmat" className="block text-white hover:text-blue-300 py-2 text-center font-medium" onClick={() => setMobileMenuOpen(false)}>Open Mat</a>
              <a href="#galeria" className="block text-white hover:text-blue-300 py-2 text-center font-medium" onClick={() => setMobileMenuOpen(false)}>Galeria</a>
              <a href="#ubicacion" className="block text-white hover:text-blue-300 py-2 text-center font-medium" onClick={() => setMobileMenuOpen(false)}>Ubicacion</a>
              <a href="#contacto" className="block text-white hover:text-blue-300 py-2 text-center font-medium" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-16"> {/* Adjusted padding-top based on default header height */}
        {/* Hero Section */}
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

        {/* About Section */}
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
                  <li className="flex items-center text-black">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Clases para niños desde los 6 años
                  </li>
                  <li className="flex items-center text-black">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Grupos de adultos principiantes y avanzados
                  </li>
                  <li className="flex items-center text-black">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Instructores certificados y con experiencia
                  </li>
                  <li className="flex items-center text-black">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Afiliados oficialmente a la academia Renzo Gracie
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden flex items-center justify-center p-5">
                <div className="transform rotate-animation">
                  <img
                    src="/Facebook Image (15).jpg"
                    alt="Armada BJJ - Equipo Renzo Gracie"
                    width={510}
                    height={340}
                    className="w-full h-auto rounded-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instructors Section */}
        <section id="instructores" className="py-16 bg-gray-100 text-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif">Nuestros Instructores</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Instructor 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
                <div className="h-72 w-full relative flex-shrink-0">
                   <img
                    src="/instructors/Jesus.png"
                    alt="Jesus Ortiz"
                    className="absolute inset-0 w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">Jesus Ortiz</h3>
                  <p className="text-gray-700 font-semibold mb-4">Cinta Negra</p>
                  <p className="text-gray-700">
                    Profesor principal de Armada BJJ, especializado en técnicas avanzadas y entrenamiento para competición. Con años de experiencia, ha desarrollado un sistema de enseñanza que prepara a sus alumnos para alcanzar un alto nivel técnico en Jiu-Jitsu.
                  </p>
                </div>
              </div>

              {/* Instructor 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
                <div className="h-72 w-full relative flex-shrink-0">
                   <img
                    src="/instructors/Willy.png"
                    alt="Willy Flores"
                    className="absolute inset-0 w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">Willy Flores</h3>
                  <p className="text-gray-700 font-semibold mb-4">Cinta Cafe 4 grados</p>
                  <p className="text-gray-700">
                    Instructor especializado en fundamentos de Jiu-Jitsu. Su método de enseñanza se enfoca en construir bases sólidas para los practicantes de todos los niveles, asegurando que dominen los movimientos esenciales antes de avanzar a técnicas más complejas.
                  </p>
                </div>
              </div>

              {/* Instructor 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
                <div className="h-72 w-full relative flex-shrink-0">
                   <img
                    src="/instructors/alejandro-photo.png"
                    alt="Alejandro Aldama"
                    className="absolute inset-0 w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">Alejandro Aldama</h3>
                  <p className="text-gray-700 font-semibold mb-4">Cinta Cafe 4 Grados</p>
                  <p className="text-gray-700">
                    Lidera nuestro programa infantil de Jiu Jitsu Kids, combinando técnicas de BJJ con actividades divertidas que mantienen a los niños comprometidos mientras aprenden disciplina y autodefensa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Mat Section */}
        <section id="openmat" className="py-16 bg-blue-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white font-serif">Open Mat</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4 text-white">Práctica Libre</h3>
                <p className="text-gray-100 mb-6">
                  Nuestras sesiones de Open Mat están abiertas para practicantes de todas las academias de forma gratuita, todos los domingos a las 3:00 PM. Es el momento perfecto para poner en práctica las técnicas aprendidas durante la semana y ganar experiencia real en un ambiente colaborativo.
                </p>
                <ul className="space-y-2 text-gray-100">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Todos los domingos a las 3:00 PM
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

        {/* Image Carousel Section */}
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
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        currentSlide === index
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

        {/* Location Section with Google Maps */}
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

        {/* Horarios Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif text-black">Horarios de Clases</h2>

            {/* Logo */}
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

            {/* Calendar */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Outer scroll container */}
              <div className="overflow-x-auto">
                {/* Minimum width container for both header and body */}
                <div className="min-w-[700px]">
                  {/* Calendar Header (Stays inside min-width container) */}
                  <div className="grid grid-cols-8 bg-gray-800 text-white text-center font-medium text-xs sm:text-sm">
                    <div className="py-3 border-r border-gray-700"></div>
                    <div className="py-3 border-r border-gray-700"><span className="sm:hidden">L</span><span className="hidden sm:inline">Lunes</span></div>
                    <div className="py-3 border-r border-gray-700"><span className="sm:hidden">M</span><span className="hidden sm:inline">Martes</span></div>
                    <div className="py-3 border-r border-gray-700"><span className="sm:hidden">M</span><span className="hidden sm:inline">Miércoles</span></div>
                    <div className="py-3 border-r border-gray-700"><span className="sm:hidden">J</span><span className="hidden sm:inline">Jueves</span></div>
                    <div className="py-3 border-r border-gray-700"><span className="sm:hidden">V</span><span className="hidden sm:inline">Viernes</span></div>
                    <div className="py-3 border-r border-gray-700"><span className="sm:hidden">S</span><span className="hidden sm:inline">Sábado</span></div>
                    <div className="py-3"><span className="sm:hidden">D</span><span className="hidden sm:inline">Domingo</span></div>
                  </div>

                  {/* Calendar Body (All rows directly inside min-width container) */}
                  {/* 6:40 AM - 7:40 AM */}
                  <div className="grid grid-cols-8 border-b border-gray-200">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">06:40 AM - 07:40 AM</div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                      <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                      <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                      <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                      <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                      <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1"></div>
                  </div>

                  {/* 7:40 AM - 8:40 AM */}
                  <div className="grid grid-cols-8 border-b border-gray-200 min-h-[40px]">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">07:40 AM - 08:40 AM</div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1"></div>
                  </div>

                  {/* 8:40 AM - 9:40 AM */}
                   <div className="grid grid-cols-8 border-b border-gray-200 min-h-[40px]">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">08:40 AM - 09:40 AM</div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1"></div>
                  </div>

                  {/* 9:40 AM - 10:40 AM */}
                   <div className="grid grid-cols-8 border-b border-gray-200 min-h-[40px]">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">09:40 AM - 10:40 AM</div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1"></div>
                  </div>

                  {/* 10:40 AM - 11:40 AM */}
                   <div className="grid grid-cols-8 border-b border-gray-200 min-h-[40px]">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">10:40 AM - 11:40 AM</div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1"></div>
                  </div>

                  {/* 11:40 AM - 12:40 PM */}
                   <div className="grid grid-cols-8 border-b border-gray-200 min-h-[40px]">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">11:40 AM - 12:40 PM</div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1"></div>
                  </div>

                  {/* 12:40 PM - 1:40 PM */}
                  <div className="grid grid-cols-8 border-b border-gray-200 min-h-[40px]">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">12:40 PM - 01:40 PM</div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1"></div>
                  </div>

                  {/* 1:00 PM - 2:00 PM */}
                  <div className="grid grid-cols-8 border-b border-gray-200">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">01:00 PM - 02:00 PM</div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200 bg-green-100">
                      <div className="bg-green-600 text-white rounded p-1 text-xs text-center">
                        <div className="flex items-center justify-center">
                          <svg className="w-3 h-3 mr-1 inline" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                          </svg>
                          <p className="font-medium inline">BJJ Kids</p>
                        </div>
                        <p className="text-xs">6-15 años</p>
                      </div>
                    </div>
                    <div className="p-1"></div>
                  </div>

                  {/* 2:00 PM - 3:00 PM */}
                  <div className="grid grid-cols-8 border-b border-gray-200 min-h-[40px]">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">02:00 PM - 03:00 PM</div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1"></div>
                  </div>

                  {/* 3:00 PM - 4:00 PM */}
                   <div className="grid grid-cols-8 border-b border-gray-200">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">03:00 PM - 04:00 PM</div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                     <div className="p-1 bg-purple-100">
                      <div className="bg-purple-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Open Mat</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                  </div>

                  {/* 4:00 PM - 5:00 PM */}
                  <div className="grid grid-cols-8 border-b border-gray-200">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">04:00 PM - 05:00 PM</div>
                    <div className="p-1 border-r border-gray-200 bg-green-100">
                      <div className="bg-green-600 text-white rounded p-1 text-xs text-center">
                         <div className="flex items-center justify-center">
                          <svg className="w-3 h-3 mr-1 inline" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                          </svg>
                          <p className="font-medium inline">BJJ Kids</p>
                        </div>
                        <p className="text-xs">6-15 años</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-green-100">
                       <div className="bg-green-600 text-white rounded p-1 text-xs text-center">
                         <div className="flex items-center justify-center">
                          <svg className="w-3 h-3 mr-1 inline" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                          </svg>
                          <p className="font-medium inline">BJJ Kids</p>
                        </div>
                        <p className="text-xs">6-15 años</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-green-100">
                      <div className="bg-green-600 text-white rounded p-1 text-xs text-center">
                         <div className="flex items-center justify-center">
                          <svg className="w-3 h-3 mr-1 inline" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                          </svg>
                          <p className="font-medium inline">BJJ Kids</p>
                        </div>
                        <p className="text-xs">6-15 años</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-green-100">
                       <div className="bg-green-600 text-white rounded p-1 text-xs text-center">
                         <div className="flex items-center justify-center">
                          <svg className="w-3 h-3 mr-1 inline" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                          </svg>
                          <p className="font-medium inline">BJJ Kids</p>
                        </div>
                        <p className="text-xs">6-15 años</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-green-100">
                       <div className="bg-green-600 text-white rounded p-1 text-xs text-center">
                         <div className="flex items-center justify-center">
                          <svg className="w-3 h-3 mr-1 inline" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                          </svg>
                          <p className="font-medium inline">BJJ Kids</p>
                        </div>
                        <p className="text-xs">6-15 años</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1"></div>
                  </div>

                  {/* 5:00 PM - 6:00 PM */}
                  <div className="grid grid-cols-8 border-b border-gray-200">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">05:00 PM - 06:00 PM</div>
                     <div className="p-1 border-r border-gray-200 bg-green-100">
                      <div className="bg-green-600 text-white rounded p-1 text-xs text-center">
                         <div className="flex items-center justify-center">
                          <svg className="w-3 h-3 mr-1 inline" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                          </svg>
                          <p className="font-medium inline">BJJ Kids</p>
                        </div>
                        <p className="text-xs">6-15 años</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-green-100">
                       <div className="bg-green-600 text-white rounded p-1 text-xs text-center">
                         <div className="flex items-center justify-center">
                          <svg className="w-3 h-3 mr-1 inline" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                          </svg>
                          <p className="font-medium inline">BJJ Kids</p>
                        </div>
                        <p className="text-xs">6-15 años</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-green-100">
                      <div className="bg-green-600 text-white rounded p-1 text-xs text-center">
                         <div className="flex items-center justify-center">
                          <svg className="w-3 h-3 mr-1 inline" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                          </svg>
                          <p className="font-medium inline">BJJ Kids</p>
                        </div>
                        <p className="text-xs">6-15 años</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-green-100">
                       <div className="bg-green-600 text-white rounded p-1 text-xs text-center">
                         <div className="flex items-center justify-center">
                          <svg className="w-3 h-3 mr-1 inline" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                          </svg>
                          <p className="font-medium inline">BJJ Kids</p>
                        </div>
                        <p className="text-xs">6-15 años</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1"></div>
                  </div>

                  {/* 6:00 PM - 7:00 PM */}
                  <div className="grid grid-cols-8 border-b border-gray-200 min-h-[40px]">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">06:00 PM - 07:00 PM</div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1"></div>
                  </div>

                  {/* 7:00 PM - 8:00 PM */}
                  <div className="grid grid-cols-8 border-b border-gray-200">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">07:00 PM - 08:00 PM</div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                      <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                       <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                       <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                       <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                      <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1"></div>
                  </div>

                  {/* 8:00 PM - 9:00 PM */}
                  <div className="grid grid-cols-8 border-b border-gray-200">
                    <div className="p-1 border-r border-gray-200 bg-gray-50 font-medium text-gray-700 text-xs flex items-center justify-center text-center">08:00 PM - 09:00 PM</div>
                     <div className="p-1 border-r border-gray-200 bg-blue-100">
                      <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                       <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                       <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                       <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200 bg-blue-100">
                      <div className="bg-blue-600 text-white rounded p-1 text-xs text-center">
                        <p className="font-medium">Adultos</p>
                        <p className="text-xs">Todos los niveles</p>
                      </div>
                    </div>
                    <div className="p-1 border-r border-gray-200"></div>
                    <div className="p-1"></div>
                  </div>

                </div> {/* End min-w-[700px] */}
              </div> {/* End overflow-x-auto */}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contacto" className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">¿Listo para comenzar tu viaje en BJJ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contáctanos ahora por WhatsApp para obtener información sobre horarios y precios.
            </p>
            <a
              href="https://wa.me/526181114689?text=Hola,%20me%20interesa%20información%20sobre%20las%20clases%20de%20BJJ"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-lg inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contáctanos por WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex items-center">
              <img
                src="/Facebook Image (1) (1).png"
                alt="Armada BJJ"
                width={100}
                height={50}
                className="object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ArmadaJiuJitsu" className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Armada BJJ">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/armada_bjj/" className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Armada BJJ">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Armada BJJ. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
