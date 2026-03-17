'use client';
import { useRef } from "react";

const experiences = [
  {
    company: "Esolve International Limited",
    role: "Project Engineer",
    period: "2024 — Present",
    location: "Dhaka, BD",
    description: "Reviewing Structural/Architectural drawings for error detection and quality control. Creating topographic survey layouts using Civil 3D and ArcGIS.",
    tags: ["Civil 3D", "ArcGIS", "QC"]
  },
  {
    company: "Italian-Thai Development",
    role: "Structural Draftsman",
    period: "2022 — 2023",
    location: "MRT Line-06",
    description: "Prepared As-built drawings and Bar Bending Schedules for the mainline area including Pier Caps, Grade Beams, and Station slabs.",
    tags: ["MRT-06", "BBS", "AutoCAD"]
  },
  {
    company: "ITD-SINOHYDRO JV",
    role: "AutoCAD Operator",
    period: "2021 — 2022",
    location: "Dhaka, BD",
    description: "Drafted structural details for Pile Caps and Columns. Coordinated contract drawing modifications with consultants (NKDM).",
    tags: ["Drafting", "Infrastructure"]
  },
  {
    company: "Ornate Interior Design",
    role: "Junior Architect",
    period: "2019 — 2021",
    location: "Dhaka, BD",
    description: "Developed Architectural concepts and 3D Visualizations using Sketch-up and V-Ray Render.",
    tags: ["3D Render", "V-Ray", "Design"]
  }
];
const ExperienceHorizontal = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="py-24 bg-neutral-950/50 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Project_Timeline</h2>
          <span className="font-mono text-accent text-xs">// STATIONS_DATA_LOG</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all group"
          >
            <span className="font-mono text-xl group-active:scale-90">←</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all group"
          >
            <span className="font-mono text-xl group-active:scale-90">→</span>
          </button>
        </div>
      </div>

      {/* Main Container with Hidden Scrollbar */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-6 pb-12 snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
      >
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center"
          >
            <div className="relative p-8 border border-white/10 bg-white/[0.02] hover:border-accent/30 transition-all duration-500 h-full">
              <span className="font-mono text-accent text-xs tracking-widest">{exp.period}</span>
              <h3 className="text-2xl font-bold text-white mt-2 uppercase">{exp.role}</h3>
              <p className="text-sm font-mono text-white/50 mb-6">{exp.company}</p>
              <p className="text-sm leading-relaxed text-white/40">{exp.description}</p>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono py-1 px-2 border border-white/5 bg-white/5 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceHorizontal;