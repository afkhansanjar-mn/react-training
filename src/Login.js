import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Alert, Button, Col, Input, Layout, Row, Space } from 'antd';
import Cake from './Cake';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { queries } from '@testing-library/react';
function Login() {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const navigate = useNavigate();
    var [error,setError] = useState(null);
    var [email,setEmail] = useState();
    var [password,setPassword] = useState();


    function signin(event){
      setEmail(email);
      setPassword(password);
      // if(email === "afkhan" && password === "afkhan"){
      //   navigate('/');
      // }
      // else setError("invalid creds");
      axios({
        url:"http://apibyauw.eu-4.evennode.com/api/login",
        method:"post",
        data:{email:email,password:password}
    }).then((respose)=>{
        localStorage.setItem("token",respose.data.token);
        console.log("Login success",respose);
        navigate("/")
    },(error)=>{
        console.log("error from api is",error);
    })
    }
    function handleEmail(event){
      email = event.target.value;
    }

    function handlePassword(event){
      password = event.target.value;
    }
    return (
       <div>
        <h1>Login</h1>
        <Layout style={{background:"grey"}}>
            <Col style={{margin:"auto",marginTop:20}}>
              {error && <Alert type='danger' message={error}/>}
                <Input type="email" placeholder="email" onChange={handleEmail}></Input><br></br>
                <Input type="password" placeholder="password" onChange={handlePassword}></Input><br></br>
                <Button  style={{background:"Green"}} onClick={signin}>Login</Button>
                <Col><Button  style={{background:"Green"}}>ForgotPassword</Button></Col>
            </Col>
        </Layout>
       </div>
    );
  }
  
  export default Login;
