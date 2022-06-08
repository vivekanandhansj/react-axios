import './App.css';
import { useState } from 'react';
import DashBoard from './DashBoard';
import SideBar from './SideBar';
import TopBar from './TopBar';
import Users from './Users';
import UserForm from './UserForm';
import UserView from "./UserView";
import UserEdit from "./UserEdit";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './Product';
import AddProduct from "./AddProduct";

import ViewProduct from './ViewProduct';
import EditProduct from './EditProduct';
import { UserProvider } from './UserContext';

function App() {
  const [userName,setUserName] = useState("vivek");
  const [users,setUsers] = useState([]);
  const [product,setProduct] = useState([]);

  return (
    <BrowserRouter>
   <div id="wrapper">
     <UserProvider value ={{userName,setUserName,users,setUsers,product,setProduct}}>
     <SideBar/>
     <div id="content-wrapper" className="d-flex flex-column">
     <div id="content">
       <TopBar/>
       <div className="container-fluid">
         <Routes>
         <Route path="/Dashboard" element={<DashBoard />}/>
       
       <Route path="/Users" element={<Users />}/>
       <Route path="/Create-users-form" element={<UserForm />}/>
       <Route path="/users-view/:id" element={<UserView />}/>
       <Route path="/users-edit/:id" element={<UserEdit />}/>

       <Route path="/Products" element={<Product />}/>
       <Route path="/add-product" element={<AddProduct />}/>
       <Route path="/product-view/:id" element={<ViewProduct />}/>
      
       <Route path="/product-edit/:id" element={<EditProduct />}/>
         </Routes>
         </div>
       </div>
     </div>
     </UserProvider>
   </div>
   </BrowserRouter>
  );
}

export default App;