import React from 'react';

const Gallery = () => {
  // Demo images - you can replace src with your actual paths
  const photos = [
    { title: "Convocation_Day", tag: "ACADEMIC" },
    { title: "Site_Survey_A", tag: "FIELD_WORK" },
    { title: "Project_Meeting", tag: "MANAGEMENT" },
    { title: "CAD_Architecture", tag: "DESIGN" },
  ];

  return (
    <section id="memories" className="py-14 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter">Field_Memories</h2>
        <p className="font-mono text-xs text-white/40 mt-2">ARCHIVED_DOCUMENTATION_GALLERY</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <div key={i} className="relative aspect-[3/4] bg-neutral-900 overflow-hidden group border border-white/5">
            {/* Overlay Info */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              <p className="text-[10px] font-mono text-accent mb-1">[{photo.tag}]</p>
              <p className="text-sm font-bold uppercase">{photo.title}</p>
            </div>
            
            {/* Placeholder / Image */}
            <div className="w-full h-full bg-white/5 flex items-center justify-center italic text-white/10 text-xs">
              <img src="https://media.licdn.com/dms/image/v2/D5622AQH8sHBjXtpLTA/feedshare-shrink_2048_1536/B56ZvLyBtAKMAk-/0/1768650448504?e=1775088000&v=beta&t=LxuTC_6zhYF1rZHPcofaezBKP_w_cjLRhYta_hPemlE" alt="" />
            </div>

            {/* Corner Decors */}
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;