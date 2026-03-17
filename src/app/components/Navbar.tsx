const Navbar = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Gallery', href: '#memories' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-accent animate-pulse rounded-full"></div>
          <span className="font-mono text-sm tracking-tighter uppercase font-bold">
            M. Hasan // CVL-ENG
          </span>
        </div>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="px-4 py-1.5 border border-accent text-accent font-mono text-xs uppercase hover:bg-accent hover:text-black transition-all">
          Contact_Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;