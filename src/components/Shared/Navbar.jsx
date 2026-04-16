import { Link, useLocation } from 'react-router-dom';
import { Clock, ChartLine, Home } from 'lucide-react';

const Navbar = () => {
const location = useLocation();
const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={16} /> },
    { name: 'Timeline', path: '/timeline', icon: <Clock size={16} /> },
    { name: 'Stats', path: '/stats', icon: <ChartLine size={16} /> }
  ];


return (
<nav className="bg-white border-b border-gray-100 sticky top-0 z-50 w-full">
<div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
<Link to="/" className="flex items-center gap-2">
<span className="text-lg md:text-xl font-bold tracking-tight">
<span className="text-[#1D4539]">Keen</span>
<span className="text-[#01050d]">Keeper</span>
</span>
</Link>

<div className="flex items-center gap-1 md:gap-2">
{navLinks.map((link) => {

const isActive = location.pathname === link.path;
  
return (
    <Link
        key={link.path}
        to={link.path}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
        isActive
        
                    ? 'bg-[#1D4539] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;