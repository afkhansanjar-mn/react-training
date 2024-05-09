import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Spin, Button } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate, useSearchParams } from "react-router-dom";
import Cake from "./Cake";

export default function Search() {
    var [cakes, setCakes] = useState([]);
    var [loading, setLoading] = useState(true);
    var [query] = useSearchParams();
    var searchName = query.get('name');
    var navigate = useNavigate();

    function handleimageclick(cake){
        navigate('/Cake/'+(cake.cakeid))
    }

    function addToCart(cakedetails){
        var requestJson = {
            name:cakedetails.name,
            cakeid:cakedetails.cakeid,
            price:cakedetails.price,
            image:cakedetails.image,
            weight:1,
        }
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api" + "/addcaketocart",
            method:"post",
            data:requestJson,
            headers:{
                Authorization:localStorage.token// that token which u got while logiing in 
            }
        })
    }
    useEffect(() => {
        setLoading(true);   
        axios.get("http://apibyauw.eu-4.evennode.com/api/allCakes")
            .then(response => {
                const allCakes = response.data.data;
                console.log(allCakes);
                
                if (searchName) {
                    const filteredCakes = allCakes.filter(cake => cake.name.toLowerCase().includes(searchName.toLowerCase()));
                    setCakes(filteredCakes);
                } else {
                    setCakes(allCakes);
                }
            })
            .catch(error => {
                console.error("Error fetching cake data:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [searchName]);

    return (
        <div>
            {loading ? ( 
                <Spin size="large" />
            ) : (
                <Row gutter={16}>
                    {cakes.map((cake, index) => (
                        <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
                            <Card
                                hoverable
                                style={{ marginBottom: '20px' }}
                                cover={<img alt={cake.name} src={cake.image}  onClick={() => handleimageclick(cake)}/>}
                            >
                                <Meta
                                    title={cake.name}
                                    description={cake.price}
                                    
                                />
                                <Button style={{color:"teal"}} onClick={()=> addToCart(cake)}>Add to cart</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}
