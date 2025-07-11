import React from 'react';

const icons = [
  // Lucide FileText
  <svg key="file" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute opacity-20 text-purple-300" style={{left: '10%', top: '20%'}}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>,
  // Lucide Bot
  <svg key="bot" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute opacity-15 text-purple-400" style={{right: '8%', bottom: '18%'}}><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><path d="M8 16h.01"/><path d="M16 16h.01"/></svg>,
  // Lucide Brain
  <svg key="brain" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute opacity-10 text-purple-200" style={{left: '70%', top: '10%'}}><path d="M15.5 5.5A2.5 2.5 0 0 0 13 3h-2a2.5 2.5 0 0 0-2.5 2.5V21"/><path d="M8.5 5.5A2.5 2.5 0 0 1 11 3h2a2.5 2.5 0 0 1 2.5 2.5V21"/><path d="M12 7v4"/><path d="M9 12h6"/></svg>,
  // Lucide Code
  <svg key="code" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute opacity-10 text-purple-300" style={{left: '20%', bottom: '12%'}}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
];

const iconAnims = [
  'animate-bgicon1',
  'animate-bgicon2',
  'animate-bgicon3',
  'animate-bgicon4',
];

const BackgroundGrid: React.FC = () => (
  <div
    aria-hidden="true"
    className="fixed inset-0 w-full h-full z-0 pointer-events-none select-none bg-[#0a0a12]"
    style={{
      backgroundImage:
        `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),` +
        `linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
      backgroundSize: '40px 40px',
      backgroundPosition: 'center',
    }}
  >
    {icons.map((icon, i) => (
      <div key={i} className={iconAnims[i] + ' absolute w-fit h-fit'} style={{zIndex: 1}}>
        {icon}
      </div>
    ))}
  </div>
);

export default BackgroundGrid; 