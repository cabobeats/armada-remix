interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, children, scrolled, onClick, className = '' }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative font-sans transition-colors duration-300 font-semibold tracking-wide text-sm 
        ${scrolled ? 'text-white hover:text-blue-300' : 'text-blue-800 hover:text-blue-600'}
        ${className}
        after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 
        after:bg-current after:transition-all after:duration-300 hover:after:w-full`}
    >
      {children}
    </a>
  );
}
