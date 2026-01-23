import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Snowflake, Map, MessageSquare, Trophy, Home } from 'lucide-react';

const Layout = ({ children }) => {
  const location = useLocation();
  const [season, setSeason] = React.useState('winter'); // winter, spring, summer, autumn

  // Detect Season (Initial load)
  React.useEffect(() => {
    const month = new Date().getMonth() + 1; // 1-12
    if (month >= 3 && month <= 5) setSeason('spring');
    else if (month >= 6 && month <= 8) setSeason('summer');
    else if (month >= 9 && month <= 11) setSeason('autumn');
    else setSeason('winter');
  }, []);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  // Get particle class based on season
  const getParticleClass = () => {
    switch (season) {
      case 'spring': return 'sakura';
      case 'summer': return 'leaf-green';
      case 'autumn': return 'leaf-autumn';
      default: return 'snowflake';
    }
  };

  // Memoize particles to prevent re-generation on route changes
  const particles = React.useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 10 + 5}px`, // Slightly larger for leaves/petals
      height: `${Math.random() * 10 + 5}px`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      animationDelay: `${Math.random() * 5}s`
    }));
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-x-hidden">
      {/* Dynamic Background Particles */}
      <div className="snow-container">
        {particles.map((p) => (
          <div
            key={p.id}
            className={`particle ${getParticleClass()}`}
            style={{
              left: p.left,
              width: season === 'winter' ? `${Math.random() * 3 + 2}px` : p.width, // Snow is smaller
              height: season === 'winter' ? `${Math.random() * 3 + 2}px` : p.height,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay
            }}
          />
        ))}
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050510]/80 backdrop-blur-md border-b border-white/10">
        <div className="w-full max-w-[1600px] mx-auto px-6 flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold tracking-widest text-ice flex items-center gap-2 font-display">
            <Snowflake className="animate-spin-slow" />
            TSU-BOX 2026
          </Link>
          <div className="flex gap-8">
            <Link to="/" className={`nav-link ${isActive('/')} flex items-center gap-2`}>
              <Home size={18} /> BASE CAMP
            </Link>
            <Link to="/guide" className={`nav-link ${isActive('/guide')} flex items-center gap-2`}>
              <Map size={18} /> SURVIVAL GUIDE
            </Link>
            <Link to="/declaration" className={`nav-link ${isActive('/declaration')} flex items-center gap-2`}>
              <MessageSquare size={18} /> DECLARATION
            </Link>
            <Link to="/ranking" className={`nav-link ${isActive('/ranking')} flex items-center gap-2`}>
              <Trophy size={18} /> WAR REPORT
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow w-full flex flex-col items-center pt-24 z-10 relative">
        <div className="w-full">
          {children}
        </div>
      </main>

      <footer className="py-8 w-full border-t border-gray-900 mt-20 relative z-10">
        <div className="w-full text-center text-gray-600">
          <p className="mb-4">&copy; 2026 TSU-BOX ANNUAL QUEST. Survive the Seasons. <span style={{ color: '#ff4500', fontWeight: 'bold' }} className="text-lg ml-2">v.22-1670</span></p>

          {/* Debug / Season Switcher - Hidden but functional */}
          <div className="hidden justify-center gap-2 text-xs">
            <button onClick={() => setSeason('spring')} className={`px-2 py-1 border rounded ${season === 'spring' ? 'bg-pink-900 text-white' : 'border-gray-700'}`}>SPRING</button>
            <button onClick={() => setSeason('summer')} className={`px-2 py-1 border rounded ${season === 'summer' ? 'bg-green-900 text-white' : 'border-gray-700'}`}>SUMMER</button>
            <button onClick={() => setSeason('autumn')} className={`px-2 py-1 border rounded ${season === 'autumn' ? 'bg-orange-900 text-white' : 'border-gray-700'}`}>AUTUMN</button>
            <button onClick={() => setSeason('winter')} className={`px-2 py-1 border rounded ${season === 'winter' ? 'bg-blue-900 text-white' : 'border-gray-700'}`}>WINTER</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
