import { Link } from 'react-router-dom';
import repairGif from '../assets/404.png';

const NotFound = () => {
  return (
<div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      
<div className="max-w-md w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
<img 
          src={repairGif} 
          alt="404 Repairing" 
          className="w-300px h-150px object-cover"/>
</div>
  
<h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
   
<Link 
   to="/" 
   className="bg-[#1D4539] text-white px-8 py-3 rounded-full font-semibold 
                   hover:bg-[#15332a] transition-all duration-300 shadow-md 
                   hover:shadow-xl active:scale-95">Back to Homepage
</Link>
</div>
  );
};

export default NotFound;