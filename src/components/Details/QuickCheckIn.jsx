import toast from 'react-hot-toast';
import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';

const QuickCheckIn = ({ friend }) => {
  
const handleCheckIn = (type) => {
    
toast.success(`${type} with ${friend.name}`);

const newEntry = {
      id: Date.now(),
      friendName: friend.name,
      type: type, 
      date: new Date().toLocaleDateString('en-US', { 
      month: 'long',
      day: 'numeric', 
      year: 'numeric' 
      }),
    };

    
  const existingTimeline = JSON.parse(localStorage.getItem('timeline') || '[]');
  localStorage.setItem('timeline', JSON.stringify([newEntry, ...existingTimeline]));
  };

  const actions = [
    { label: "Call", icon: callIcon },
    { label: "Text", icon: textIcon },
    { label: "Video", icon: videoIcon }
  ];

  return (

  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
  <h3 className="text-gray-800 font-bold text-lg mb-6">Quick Check-In</h3>
  <div className="grid grid-cols-3 gap-4">
  {actions.map((action) => (

  <button
      key={action.label}
      onClick={() => handleCheckIn(action.label)}
      className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all group">
  <img src={action.icon} alt={action.label} className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
  <span className="text-gray-600 font-medium text-sm">{action.label}</span>
  </button>

  ))}

</div>
</div>
  );
};

export default QuickCheckIn;