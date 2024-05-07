import { useParams } from "react-router-dom";
function Edituser(){
    const users = [
        {
            id:1,
            name:"afkhan",
            age:23,
            location:"hyderbad",
            role:"dev"
        },
        {
            id:2,
            name:"xyz",
            location:"hyderbad",
            age:23,
            role:"dev"
        },
        {
            id:3,
            name:"abc",
            age:23,
            location:"hyderbad",
            role:"dev"
        }
    ];
    var params = useParams();
    var userid = params.userid;
    var user = users.filter((each)=>{
        return each.id == userid;
    })[0];
    return (
        <div>
            <li>id:{user.id}</li>
            <li>name:{user.name}</li>
            <li>age:{user.age}</li>
            <li>Location:{user.location}</li>
            <li>role:{user.role}</li>
        </div>
    );
}

export default Edituser;