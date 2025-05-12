import { useState, useEffect, useCallback } from 'react';
import { NavLink } from './NavLink';

const NAV_ITEMS = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#instructores', label: 'Instructores' },
    { href: '#openmat', label: 'Open Mat' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#ubicacion', label: 'Ubicacion' },
    { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Throttled scroll handler
    const handleScroll = useCallback(() => {
        let ticking = false;
        return () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 10);
                    ticking = false;
                });
                ticking = true;
            }
        };
    }, []);

    // Handle scroll for navbar styling
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const throttledHandleScroll = handleScroll();
        window.addEventListener('scroll', throttledHandleScroll);
        // Initial check
        throttledHandleScroll();
        
        return () => window.removeEventListener('scroll', throttledHandleScroll);
    }, [handleScroll]);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-blue-900 backdrop-blur-sm py-2 shadow-md' : 'bg-transparent py-3'
        }`}>
            <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
                <div className={`flex items-center justify-center transition-all duration-300 ${
                    scrolled ? 'h-10' : 'h-12'
                }`}>
                    <img
                        src="/Facebook Image (1) (1).png"
                        alt="Armada BJJ"
                        width={70}
                        height={35}
                        className={`object-contain transition-all duration-300 ${
                            scrolled ? 'w-[40px] md:w-[50px]' : 'w-[55px] md:w-[70px]'
                        }`}
                        loading="eager"
                    />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8" aria-label="Navegación principal">
                    {NAV_ITEMS.map(({ href, label }) => (
                        <NavLink key={href} href={href} scrolled={scrolled}>
                            {label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden focus:outline-none ${scrolled ? 'text-white' : 'text-blue-800'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Menú móvil"
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu"
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
                <div 
                    id="mobile-menu"
                    className="md:hidden bg-black backdrop-blur-sm py-2"
                    role="navigation"
                    aria-label="Menú móvil"
                >
                    <div className="px-4 py-3 space-y-1">
                        {NAV_ITEMS.map(({ href, label }) => (
                            <NavLink
                                key={href}
                                href={href}
                                scrolled={true}
                                onClick={closeMobileMenu}
                                className="block py-2 text-center"
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}