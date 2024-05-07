import { Button, Col, Input, Layout } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginApi(){

   var [name,setName] = useState();
   var [email,setEmail] = useState();
   var [password,setPassword] = useState();
   var navigate = useNavigate();
     
    function createAccount() {
        setName(name)
        setEmail(email)
        setPassword(password)
        var user = {
            email : password,
            password : password
        }
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api/register",
            method:"post",
            data:user
        }).then((respose)=>{
            console.log("Response register api",respose);
            navigate("/login")
        },(error)=>{
            console.log("error from api is",error);
        })
    }
    function handlename(event){
        name = event.target.value;
    }
    function handleemail(event){
        email = event.target.value;
    }
    function handlepassword(event){
        password = event.target.value;
    }
    return (
        <div>
            <Layout style={{background:"grey"}}>
        <h1>SignUp</h1>
            <Col style={{margin:"auto",marginTop:20}}>
                <Input type="text" placeholder="name" onChange={handlename}></Input><br></br>
                <Input type="email" placeholder="email" onChange={handleemail}></Input><br></br>
                <Input type="password" placeholder="password" onChange={handlepassword}></Input><br></br>
                <Button  onClick={createAccount}style={{background:"Green"}}>SignUp</Button>
            </Col>
        </Layout>
        </div>
    );
}

export default LoginApi;