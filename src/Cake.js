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
  const cakesData = [
    {
      title: 'Cake 1',
      description: 'Delicious cake with strawberries',
      image: 'https://i.pinimg.com/736x/30/7b/55/307b5502efe748aa95fc5f62ed64e16d.jpg',
      bestseller: 'yes'
    },
    {
      title: 'Cake 2',
      description: 'Yummy chocolate cake',
      image: 'https://i.pinimg.com/736x/30/7b/55/307b5502efe748aa95fc5f62ed64e16d.jpg',
      bestseller: 'yes'
    },
    {
      title: 'Cake 3',
      description: 'Tasty vanilla cake',
      image: 'https://i.pinimg.com/736x/30/7b/55/307b5502efe748aa95fc5f62ed64e16d.jpg',
      bestseller: 'yes'
    },
  ];

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
        {/* <label>{props.name}</label> */}
      {/* {cakesData.map((cake, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 240, marginBottom: '20px' }}
          cover={<img alt={cake.title} src={cake.image} />}
        >
            {console.log(cake.bestseller)}
          <Meta
            title={cake.name}
            description={cake.price}
           
          />
        </Card>
      ))} */}
      <Card
          hoverable
          style={{ width: 240, marginBottom: '20px' }}
          cover={<img alt={cake.name} src={cake.image} />}
        >
          <Meta
            title={cake.name}
            description={cake.price}
           
          />
        </Card>

    </div>
  );
};

export default Cake;
