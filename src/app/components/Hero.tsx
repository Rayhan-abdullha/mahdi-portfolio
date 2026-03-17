const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      <div className="scanline"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <p className="font-mono text-accent text-sm tracking-[0.2em] uppercase">
              // Infrastructure & Design Specialist
            </p>
            <h1 className="text-6xl md:text-8xl font-sans font-black tracking-tighter leading-none">
              MD MEHEDI <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">HASAN</span>
            </h1>
          </div>

          <p className="max-w-xl text-lg text-white/70 leading-relaxed border-l-2 border-accent/30 pl-6">
            Dedicated Civil Engineer and CAD Specialist specializing in 
            <span className="text-white font-semibold"> digital surveying, Civil 3D, and ArcGIS.</span> 
            Turning complex infrastructure requirements into precise architectural blueprints.
          </p>

          <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest">
            <span className="px-3 py-1 bg-white/5 border border-white/10">IEB Member M-46189</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10">M.Sc GIS Candidate</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10">AutoCAD Certified</span>
          </div>
        </div>

        {/* Right Visual Element */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-1 bg-accent/20 blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative aspect-square border border-white/10 bg-neutral-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
             {/* Replace with your image */}
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-xs italic">
               <img src="https://media.licdn.com/dms/image/v2/D5603AQHU3Rfj-opDnQ/profile-displayphoto-crop_800_800/B56ZvfbFlqJ8AI-/0/1768979981167?e=1775088000&v=beta&t=6z-WDnvsyblu7hpqHHrqzhxGGNGMoV-wqv_OiIugXRg" alt="" />
            </div>
            {/* UI Decors */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-accent">023.44.12 // LAT</div>
            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-accent">90.33.11 // LONG</div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50 text-white">Initiate_Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;