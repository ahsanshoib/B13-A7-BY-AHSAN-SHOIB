import { useNavigate } from 'react-router-dom';

const FriendCard = ({ friend }) => {
const navigate = useNavigate();
const statusStyles = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-amber-500 text-white",
    "on-track": "bg-[#1D4539] text-white"
  };

return (

    <div 
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer text-center"
    >
     
  <img 
        src={friend.picture} 
        alt={friend.name} 
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-gray-50"
      />

      
      <h3 className="text-xl font-bold text-gray-800">{friend.name}</h3>
      
     
      <p className="text-gray-400 text-sm mb-3">{friend.days_since_contact}d ago</p>

      
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {friend.tags.map((tag, idx) => (
          <span 
            key={idx} 
            className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      
      <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${statusStyles[friend.status.toLowerCase()] || 'bg-gray-200 text-gray-700'}`}>
        {friend.status}
      </div>
    </div>
  );
};

export default FriendCard;