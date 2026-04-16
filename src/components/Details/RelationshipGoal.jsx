const RelationshipGoal = ({ friend }) => {
  
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
      <div>
        <h3 className="text-gray-800 font-bold text-lg mb-1">Relationship Goal</h3>
        <p className="text-gray-500 text-sm">
          Connect every <span className="font-bold text-gray-800">{friend.goal} days</span>
        </p>
      </div>
      <button className="px-4 py-1.5 border border-gray-200 rounded-md text-sm font-semibold text-gray-600 hover:bg-gray-50">
        Edit
      </button>
    </div>
  );
};

export default RelationshipGoal;