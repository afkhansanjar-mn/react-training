import { Button, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";

function DataTable(props){
    var navigate = useNavigate();
    function editUser(index){
        console.log("*****"+(index+1))
        navigate("/edit/"+(index+1));
    }
    // console.log("*******",props)
    const {data} = props;
    const {deleteUser} = props;
    var totalkeys = []
    data.forEach(element => {
        var keys = Object.keys(element);
        totalkeys.push(keys);
        // console.log("total"+totalkeys);
    });
    var totalkeys = new Set(...totalkeys);
    // console.log("uniq"+totalkeys);
    var columns = [];
    totalkeys.forEach((each)=>{
        // console.log(each)
        columns.push({
            title:each.toUpperCase(),
            dataIndex:each,
            key:each
        })
        
    });
    columns.push({
        title:"Action",
        render: (text,record,index)=><Button style={{color:"red"}} onClick={()=>deleteUser(index)} >Delete</Button>,
        key:"Delete"
    })
    columns.push({
        title:"Action",
        render: (text,record,index)=><Button style={{color:"green"}} onClick={()=>editUser(index)}>Edit</Button>,
        key:"Delete"
    })
    return (
        <div>
            <Table dataSource={data} columns={columns} />;
        </div>
    )
}
export default DataTable;