import React from 'react';

const academicData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    year: "2018",
    detail: "Focus on Engineering Fundamentals & CAD Integration"
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "BPATC School & College",
    year: "2013",
    detail: "Science Group // Grade: A+"
  }
];

const Credentials = () => {
  return (
    <section id="education" className="py-14 px-6 max-w-7xl mx-auto space-y-20">
      
      {/* 1. Academic Qualification Grid */}
      <div className="space-y-10">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-black uppercase tracking-tighter">Academic_History</h2>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {academicData.map((edu, idx) => (
            <div key={idx} className="group relative p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
              <span className="font-mono text-accent text-xs mb-4 block">[{edu.year}]</span>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{edu.degree}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{edu.institution}</p>
              <div className="mt-4 text-[10px] font-mono uppercase tracking-widest text-white/30 italic">
                Verified_Credential
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. IEB Certification "Smart Card" */}
      <div className="space-y-10">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-black uppercase tracking-tighter">Professional_License</h2>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>

        <div className="max-w-2xl bg-gradient-to-br from-[#111] to-black border border-white/20 p-1 relative overflow-hidden group">
          {/* Subtle Scanline Animation */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="border border-white/10 p-8 flex flex-col md:flex-row gap-8 items-center">
            {/* The Badge Icon Aspect */}
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-accent/40 flex items-center justify-center p-2">
              <div className="w-full h-full bg-accent/10 rounded-full flex items-center justify-center font-mono text-accent font-bold text-xl">
                IEB
              </div>
            </div>

            <div className="flex-grow space-y-3 text-center md:text-left">
              <div className="inline-block px-2 py-0.5 bg-accent/20 text-accent font-mono text-[10px] uppercase tracking-tighter mb-2">
                Membership of Institution of Engineers Bangladesh
              </div>
              <h3 className="text-2xl font-black tracking-tight uppercase">Engr. MD Mehedi Hasan</h3>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-[10px] font-mono text-white/40 uppercase">Membership No.</p>
                  <p className="font-mono text-sm">M-46189</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-white/40 uppercase">Status</p>
                  <p className="font-mono text-sm text-green-400">ACTIVE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Credentials;