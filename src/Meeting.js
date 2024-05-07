import { useState } from "react";

const { Button } = require("antd");

function Meeting(){
    var [user,setUser] = useState(0);
    var [people,setPeople] = useState([]);
    var username = "";
    function joinmeeting(){
        setUser(user+1);
        people.push(username);
        people = [...people];
        setPeople(people)
        console.log(people)
    }
    function getName(event){
        username = event.target.value;
    }

    return (
        <div>
            People Joined :<h1>{user}</h1>
            <input type="text" placeholder="name" onChange={getName}></input>
            <Button onClick={joinmeeting}>Join Metting</Button>
            {
                people.map((each)=>{
                   return <div>{each}</div>
                })
            }
        </div>
    )
}

export default Meeting;