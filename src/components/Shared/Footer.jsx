import logoWhite from '../../assets/logo-xl.png'; 
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-[#1D4539] text-white py-12 mt-10">
    <div className="max-w-6xl mx-auto px-6 text-center">
        
    <div className="flex flex-col items-center mb-6">
    <img src={logoWhite} alt="KeenKeeper" className="h-12 mb-4" />
    <p className="text-gray-300 text-sm max-w-md">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
    </div>

      
    <div className="mb-10">
    <h4 className="text-sm font-semibold mb-4 tracking-widest">Social Links</h4>
    <div className="flex justify-center gap-4">
    <a href="#" className="hover:opacity-80 transition-opacity">
    <img src={instagram} alt="Instagram" className="w-8 h-8" />
    </a>
            
    <a href="#" className="hover:opacity-80 transition-opacity">
    <img src={facebook} alt="Facebook" className="w-8 h-8" />
    </a>

    <a href="#" className="hover:opacity-80 transition-opacity">
    <img src={twitter} alt="Twitter" className="w-8 h-8" />
    </a>

    </div>
    </div>

        
    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-medium">
    <p>© 2026 KeenKeeper. All rights reserved.</p>
    <div className="flex gap-6 mt-4 md:mt-0">

            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>

    </div>
    </div>
    </div>
    </footer>
  );
};

export default Footer;