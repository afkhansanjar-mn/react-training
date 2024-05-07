import { Button, Col, Input, Layout } from "antd";

function ForgotPassword(){
    return (
        <div>
        <h1>Reset Password</h1>
        <Layout style={{background:"grey"}}>
            <Col style={{margin:"auto",marginTop:20}}>
                <Input type="password" placeholder="old password"></Input><br></br>
                <Input type="password" placeholder="new password"></Input><br></br>
                <Input type="password" placeholder="retype new password"></Input><br></br>
                <Button  style={{background:"Green"}}>Login</Button>
            </Col>
        </Layout>
        </div>
    );
}

export default ForgotPassword;