import { useEffect, useState } from 'react';
import friendsData from '../../data/friends.json';

const StatusCards = () => {
const [interactionCount, setInteractionCount] = useState(0);

useEffect(() => {

const savedTimeline = JSON.parse(localStorage.getItem('timeline') || '[]');
setInteractionCount(savedTimeline.length);
}, []);

 
const totalFriends = friendsData.length;
const onTrackCount = friendsData.filter(f => f.status.toLowerCase() === 'on-track').length;
const needAttentionCount = friendsData.filter(f => f.status.toLowerCase() === 'overdue').length;
const statusData = [
    { label: "Total Friends", value: totalFriends },
    { label: "On Track", value: onTrackCount },
    { label: "Need Attention", value: needAttentionCount },
    { label: "Interactions", value: interactionCount },
  ];

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {statusData.map((item, index) => (

  <div 
    key={index} 
    className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col justify-center transition-all hover:shadow-md hover:-translate-y-1">

    <h2 className="text-4xl font-bold text-[#111827] mb-2">
    {item.value}
    </h2>

    <p className="text-gray-400 font-semibold uppercase tracking-widest text-[10px]">{item.label}</p>
  
  </div>
    ))}
</div>
  );
};

export default StatusCards;