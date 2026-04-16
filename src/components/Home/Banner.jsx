import { Plus } from 'lucide-react';

const Banner = () => {
  return (
    <div className="text-center py-12 px-4">
      
      <h1 className="text-4xl md:text-5xl font-bold text-[#01050d] mb-4">
        Friends to keep close in your life
      </h1>
      
      
      <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the 
        relationships that matter most.
      </p>

      
      <button className="inline-flex items-center gap-2 bg-[#1D4539] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#16352c] transition-colors shadow-sm">
        <Plus size={20} />
        Add a Friend
      </button>
    </div>
  );
};

export default Banner;