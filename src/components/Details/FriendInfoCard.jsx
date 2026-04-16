import { Bell, Archive, Trash2 } from 'lucide-react';

const FriendInfoCard = ({ friend }) => {
const statusStyles = {

    "overdue": "bg-red-100 text-red-600",
    "almost due": "bg-amber-100 text-amber-600",
    "on-track": "bg-green-100 text-green-700"
};

return (
<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">

<img 
  src={`/${friend.picture}`} 
  alt={friend.name} 
  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-50" 
/>

<h2 className="text-2xl font-bold text-gray-800">{friend.name}</h2>
      
<div className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase mt-2 mb-4 ${statusStyles[friend.status.toLowerCase()]}`}>
        {friend.status}</div>

<div className="flex justify-center gap-2 mb-4">
        {friend.tags.map(tag => (
          <span key={tag} className="bg-gray-100 text-gray-500 text-[10px] px-3 py-1 rounded-md font-bold uppercase">{tag}</span>
        ))}
</div>

      <p className="text-gray-500 italic mb-2 text-sm">"{friend.bio}"</p>
      <p className="text-gray-400 text-xs mb-6 font-medium">{friend.email}</p>

    

      <div className="space-y-3">

      <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-all text-sm">
      <Bell size={18} /> Snooze 2 Weeks
      </button>

      <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-all text-sm">
      <Archive size={18} /> Archive
      </button>

      <button className="w-full flex items-center justify-center gap-2 py-3 border border-red-200 rounded-xl text-red-700 font-semibold hover:bg-red-50 transition-all text-sm">
      <Trash2 size={18} /> Delete
      </button>
      
      </div>
    </div>
  );
};

export default FriendInfoCard;