import { Row } from "antd";
import User from "./User";

function UserList()  {
    const users = [
        {
            id:1,
            name:"afkhan",
            age:23,
            location : "hyderabad"
        },
        {
            id:2,
            name:"xyz",
            age:23
        },
        {
            id:3,
            name:"abc",
            age:23
        }
    ]
    return (
       <Row>
        <User data={users[0]}></User>
       </Row>
    )
}