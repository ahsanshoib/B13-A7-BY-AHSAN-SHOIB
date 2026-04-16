import { useParams } from 'react-router-dom';
import friendsData from '../data/friends.json';
import FriendInfoCard from '../components/Details/FriendInfoCard';
import DetailsStats from '../components/Details/DetailsStats';
import RelationshipGoal from '../components/Details/RelationshipGoal';
import QuickCheckIn from '../components/Details/QuickCheckIn';

const FriendDetails = () => {
const { id } = useParams();
const friend = friendsData.find((f) => f.id === parseInt(id));

  if (!friend) {
    return <div className="text-center py-20 text-2xl font-bold">Friend not found!</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        
        <div className="lg:col-span-4 space-y-6">
          <FriendInfoCard friend={friend} />
        </div>

        
        <div className="lg:col-span-8 space-y-6">
          <DetailsStats friend={friend} />
          <RelationshipGoal friend={friend} />
          <QuickCheckIn friend={friend} />
        </div>
        
      </div>
    </div>
  );
};

export default FriendDetails;