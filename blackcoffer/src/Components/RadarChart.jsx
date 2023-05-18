import React, { useEffect, useState } from "react";
import axios from "axios";
import { Radar } from "react-chartjs-2";
const RadarChart = () => {
  const [dataa, setDataa] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("https://blackcoffer-backend-production-3ed6.up.railway.app/data")
      .then((res) => {
        setDataa(res.data)
        //console.log(res.data)
    })
      .catch((err) => console.log(err));
  };
  const labels = dataa.map((el)=>{
      return  el.topic 
    });
    const Data = {
      labels: labels,
      datasets: [
        {
          label: "Based on intensity",
          backgroundColor:"green",
          borderColor: "rgb(255, 99, 132)",
          data: dataa.map((el)=>{
              return  el.intensity 
            }),
        },
        {
          label: "Based on relevance",
          backgroundColor:"blue",
          borderColor: "rgb(75, 192, 192)",
          data: dataa.map((el)=>{
              return  el.relevance 
            }),
        },
        {
          label: "Based on likelihood",
          backgroundColor:"red",
          borderColor: "rgb(201, 203, 207)",
          data: dataa.map((el)=>{
              return  el.likelihood 
            }),
        },
      ],
    };
  return (
    <div style={{width:"60%",margin:"auto"}}>
    <h1 style={{color:"blueviolet"}} >Radar Chart Presentation</h1>
 <Radar data={Data} />
</div>
  )
}

export default RadarChart