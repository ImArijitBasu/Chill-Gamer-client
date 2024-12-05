import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ExtraTwo = () => {
    
    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetch('https://assignment-10-smoky.vercel.app/games')
        .then(res => res.json())
        .then(data=>{
            setReviews(data);
        })
    },[])
    const chartData = reviews.map((review)=>({
        year : review.publishingYear,
        rating: review.rating
    })).sort((a,b)=>a.year - b.year)
  return (
    <ResponsiveContainer width="100%" height={300}>
    <LineChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis/>
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="rating" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
  )
};

export default ExtraTwo;
