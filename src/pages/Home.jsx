import React, { useState, useEffect } from 'react';
import Banner from "../components/Home/Banner";
import StatusCards from "../components/Home/StatusCards";
import FriendCard from "../components/Home/FriendCard";
import friendsData from "../data/friends.json"; 

const Home = () => {
const [loading, setLoading] = useState(true);

useEffect(() => {
  
const timer = setTimeout(() => {
setLoading(false);
}, 1000);

return () => clearTimeout(timer);
}, []);

if (loading) {
return <LoadingSpinner />;
}

return (
<div className="max-w-6xl mx-auto pb-10">
<Banner />
<StatusCards />
      
<div className="mt-12 px-4">
<h2 className="text-2xl font-bold text-gray-800 mb-8">Your Friends</h2>
        

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{friendsData.map(friend => (
<FriendCard key={friend.id} friend={friend} />
          ))}

        </div>
      </div>
    </div>
  );
};


const LoadingSpinner = () => (
<div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
<div className="relative">
  
<div className="w-12 h-12 border-4 border-[#1D4539]/20 rounded-full"></div>
<div className="w-12 h-12 border-4 border-[#1D4539] border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
</div>
</div>
);

export default Home;