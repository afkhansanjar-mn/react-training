import { Card, Col, Row, Spin } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const [cartData, setCartData] = useState(null);
    var [loading, setLoading] = useState(true);
    var navigate = useNavigate();
    function handleimageclick(cake){
        navigate('/Cake/'+(cake.cakeid))
    }
    useEffect(() => { 
        setLoading(true); 
        axios.get("http://apibyauw.eu-4.evennode.com/api/cakecart", {
            headers: {
                Authorization: localStorage.token
            }
        })
        .then(response => {
            console.log(response.data.data)
            setCartData(response.data.data); 
        })
        .catch(error => {
            console.error("Error fetching cart data:", error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {loading ? ( 
                <Spin size="large" />
            ) : (
                <Row gutter={16}>
                    {cartData.map((cake, index) => (
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
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}
