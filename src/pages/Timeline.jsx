import { useState, useEffect } from 'react';
import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';

const Timeline = () => {
const [activities, setActivities] = useState([]);
const [filter, setFilter] = useState('All');

useEffect(() => {
const savedTimeline = JSON.parse(localStorage.getItem('timeline') || '[]');
setActivities(savedTimeline);
  }, []);

  
const filteredActivities = filter === 'All' 
    ? activities 
    : activities.filter(act => act.type === filter);

const getIcon = (type) => {
    if (type === 'Call') return callIcon;
    if (type === 'Text') return textIcon;
    return videoIcon;
  };

return (
  <div className="max-w-4xl mx-auto px-4 py-10">
    
    <div className="flex flex-col items-start mb-8 gap-4">
    <h1 className="text-3xl font-bold text-gray-800">Timeline</h1>
      
      
      <select 
        className="border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-[#1D4539] bg-white cursor-pointer"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">Filter timeline</option>
        <option value="Call">Calls Only</option>
        <option value="Text">Texts Only</option>
        <option value="Video">Videos Only</option>

      </select>
    </div>
    
      <div className="space-y-4">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <div 
              key={activity.id} 
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 transition-hover hover:shadow-md"
            >
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <img src={getIcon(activity.type)} alt={activity.type} className="w-6 h-6" />
              </div>

              
              <div>
                <h3 className="font-bold text-gray-800">
                  {activity.type} <span className="font-normal text-gray-500 text-sm">with {activity.friendName}</span>
                </h3>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                  {activity.date}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400">No interactions logged yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;