const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="border-t border-white/10 bg-black pt-10 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Status */}
          <div className="space-y-4">
            <h3 className="font-black text-2xl uppercase tracking-tighter">M. HASAN</h3>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                System_Status: Online
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <p className="font-mono text-xs text-accent uppercase tracking-widest">// Navigation</p>
            <ul className="space-y-2 font-mono text-xs uppercase tracking-tight text-white/40">
              <li><a href="#about" className="hover:text-white transition-colors">[ 01 ] About_Me</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">[ 02 ] Experience</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">[ 03 ] Credentials</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Bits */}
          <div className="space-y-4">
            <p className="font-mono text-xs text-accent uppercase tracking-widest">// Connect</p>
            <ul className="space-y-2 font-mono text-xs uppercase tracking-tight text-white/40">
              <li><a href="mailto:rontu234@gmail.com" className="hover:text-white transition-colors">Email_Link</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn_Profile</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp_Direct</a></li>
            </ul>
          </div>

          {/* Column 4: Technical Specs (The Fun Part) */}
          <div className="space-y-4 bg-white/5 p-4 border border-white/5">
            <p className="font-mono text-xs text-white/60 uppercase tracking-widest underline decoration-accent underline-offset-4">Tech_Specs</p>
            <div className="font-mono text-[9px] text-white/30 space-y-1">
              <p>FRAMEWORK: NEXT.JS 15</p>
              <p>STYLING: TAILWIND 4.0</p>
              <p>TYPOGRAPHY: GEIST_MONO</p>
              <p>LOCATION: 23.8103° N, 90.4125° E</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">
            © {currentYear} All Rights Reserved // MD Mehedi Hasan
          </p>
          <div className="font-mono text-[10px] text-white/20 uppercase">
            Built_for_Civil_Engineering_Excellence
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;