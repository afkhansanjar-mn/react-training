import React, { useState } from 'react';
import { Button, Input, Menu } from 'antd';
import { HomeOutlined, UserOutlined, LaptopOutlined } from '@ant-design/icons';
import Cake from './Cake';
import { Link, useNavigate } from 'react-router-dom';


const { SubMenu } = Menu;

function NavbarMenu() {
  var navigate = useNavigate();
  var [search,setSearch] = useState();
  function handlesearch(event){
    search = event.target.value;
  }

  function dosearch(){
    navigate("/search?name=",search?search:'');
  }
  return (
    <Menu mode="horizontal">
      
      <Menu.Item key="home" icon={<HomeOutlined />}> 
      <Link to='/'>
        Home
        </Link>
      </Menu.Item>
      
      
      <Menu.Item key="login" icon={<HomeOutlined />}>  
      <Link to='/login'>
        Login
        </Link>
      </Menu.Item>
         
  
       <Menu.Item key="cart">
        <Link to='/cart'/>
        Cart
      </Menu.Item> 
      <Menu.Item key="search"> 
      <Input type='search' placeholder='search' onChange={handlesearch}>
      </Input>
      <Button onClick={dosearch}>Search</Button>
      </Menu.Item> 
    </Menu>
    
  );
}

export default NavbarMenu;
