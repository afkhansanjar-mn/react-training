import { Button, Col, Input, Layout, Table } from "antd";
import { useState } from "react";
import DataTable from "./DataTable";
import FormItemLabel from "antd/es/form/FormItemLabel";
import { useNavigate } from "react-router-dom";

function Signup(){
    var name,email,password;
    var [arr,setArr] = useState([]);
    var navigate = useNavigate();
    function updateName(event){
        name = event.target.value;
    }

    function deleteUser(ind){
        
         arr.splice(ind,1);
         arr.sort((a,b)=>a.name-b.name);
         console.log(arr);
        setArr([...arr]);
    }
    function updateEmail(event){
        email = event.target.value;
    }
    function updatePaswword(event){
        password = event.target.value;
    }
    function displayDetails(){
        arr.push({name:name,email:email,password:password});
        arr = [...arr];
        arr.sort((a,b)=>a.email-b.email);
        setArr(arr);
        console.log(arr);
    }
    function handleLogin(){
        navigate('/login')
    }
    return <div>
        
        <Layout style={{background:"grey"}}>
        <h1>SignUp</h1>
            <Col style={{margin:"auto",marginTop:20}}>
                <Input type="text" placeholder="name" onChange={updateName}></Input><br></br>
                <Input type="email" placeholder="email" onChange={updateEmail}></Input><br></br>
                <Input type="password" placeholder="password" onChange={updatePaswword}></Input><br></br>
                <Button onClick={displayDetails} style={{background:"Green"}}>SignUp</Button>
                <Col>
                <Button style={{background:"Green"}} onClick={handleLogin}>Login</Button>
                </Col>
            </Col>
        </Layout>
        {/* {console.log(arr)} */}
        <DataTable deleteUser={deleteUser} data={arr}/>
    </div>
}

export default Signup;