import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Stats = () => {
const [timeline, setTimeline] = useState([]);

useEffect(() => {

const savedTimeline = localStorage.getItem('timeline');

if (savedTimeline) {
try {
setTimeline(JSON.parse(savedTimeline));
      } catch (error) {
        console.error("Error parsing timeline data:", error);
        setTimeline([]);
      }
    }
  }, []);

  const statsData = [

    { 
      name: 'Call', 
      value: timeline.filter(item => item && item.type === 'Call').length, 
      color: '#244d3f' 
    },
    { 
      name: 'Text', 
      value: timeline.filter(item => item && item.type === 'Text').length, 
      color: '#7e35e1' 
    },
    { 
      name: 'Video', 
      value: timeline.filter(item => item && item.type === 'Video').length, 
      color: '#37a163' 
    },
  ];


const totalInteractions = statsData.reduce((sum, entry) => sum + entry.value, 0);
const hasData = totalInteractions > 0;

  return (
    <div className="max-w-4xl mx-auto p-6">
    
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-h-[400px] flex items-center justify-center">
        {hasData ? (
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statsData}
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {statsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name) => [value, name]}
                  contentStyle={{ 
                    borderRadius: '8px', 
                    border: 'none', 
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                  }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  formatter={(value) => (
                    <span className="text-gray-700 font-medium px-2">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="text-center">
           
            <p className="text-gray-400 font-medium">No interactions recorded yet</p>
            <p className="text-gray-300 text-sm mt-1">Log a call, text, or video to see stats</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;