import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const { Meta } = Card;

const Cake = (props) => {
  // Array of data for multiple cards
  var params = useParams();
  var cakeid = params.cakeid;
  var [cake,setCake] = useState();

  useEffect(() => {
    axios.get("http://apibyauw.eu-4.evennode.com/api/cake/"+cakeid)
        .then(response => {
          console.log("sanajr",response.data.data);
          setCake(response.data.data);
        })
        .catch(error => {
            console.error("Error fetching cake data:", error);
        })
}, []);

return (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    {cake && ( 
      <Card hoverable
        style={{ width: 240, marginBottom: '20px' }}
        cover={<img alt={cake.name} src={cake.image} />}
      >
        {cake.description}<br></br>
        Price : {cake.price}<br></br>
        Likes : {cake.likes}<br></br>
        Ratings  : {cake.ratings}<br></br>

      </Card>
    )}
  </div>
);

};

export default Cake;
