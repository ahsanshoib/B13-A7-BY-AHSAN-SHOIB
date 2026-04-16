import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer'; 
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const MainLayout = () => {
  useEffect(() => {
    
    localStorage.clear();
    
   
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      <Toaster />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer /> 
    </div>
  );
};

export default MainLayout;


