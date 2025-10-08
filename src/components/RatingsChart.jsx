import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const RatingsChart = ({ rate }) => {
  console.log(rate);
    const data = Array.isArray(rate) ? rate : Object.values(rate);
    


 console.log("Data for chart:", data);
  return (
    <div > {/* এখানে height fix করা হয়েছে */}
       <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
   
  </BarChart>
    </div>
  );
};

export default RatingsChart;
