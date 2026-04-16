const DetailsStats = ({ friend }) => {
  const stats = [
    { label: "Days Since Contact", value: friend.days_since_contact },
    { label: "Goal (Days)", value: friend.goal },
    { label: "Next Due", value: friend.next_due_date }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
        <h4 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h4>
        <p className="text-gray-400 text-xs font-medium uppercase tracking-tighter">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailsStats;