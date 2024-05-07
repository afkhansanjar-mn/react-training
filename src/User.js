// import { Alert, Row } from "antd";
import DataTable from "./DataTable";

const User = ()=>{
    const users = [
        {
            id:1,
            name:"afkhan",
            age:23,
            location:"hyderbad"
        },
        {
            id:2,
            name:"xyz",
            age:23
        },
        {
            id:3,
            name:"abc",
            age:23,
            location:"hyderbad",
            role:"dev"
        }
    ]
    // function buttonClick(){
    //     return (
    //         <div>
    //           <h1>Hello, world!</h1>
    //           <h2>It is {new Date().toLocaleTimeString()}.</h2>
    //         </div>
    //       );
    // }
    return (
        <div>
            {/* <div>
                {buttonClick()}
            </div>
            {users.map((user)=>{
                const keys = Object.keys(user)
                return (
                    <Row>
                    <div>
                        {
                            keys.map((eachkey)=>{
                                return <label>{user[eachkey]}</label> 
                            })   
                        }

                    </div>
                    </Row>
                )
            })} */}
            <DataTable data={users}></DataTable>
        </div>
    );
}

export default User;