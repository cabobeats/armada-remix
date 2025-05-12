import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import About from "~/components/About";
import Instructors from "~/components/Instructors";
import OpenMat from "~/components/Openmat";
import ImageCarousel from "~/components/Imagecarousel";
import Horarios from "~/components/Horarios";
import CallToAction from "~/components/Calltoaction";
import Map from "~/components/Map";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Armada BJJ - Jiu-Jitsu Durango" },
    { name: "description", content: "Clases de Jiu-Jitsu Brasileño para niños y adultos en Durango. Afiliados a Renzo Gracie." },
  ];
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow pt-16"> {/* Adjusted padding-top based on default header height */}
        <Hero />
        <About />
        <Instructors />
        <OpenMat />
        <ImageCarousel /> 
        <Map />
        <Horarios />
        <CallToAction />
        
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
