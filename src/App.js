import { Sidebar } from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import UserList from "./components/pages/userList/UserList";
import Home from "./components/pages/home/Home";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container" >
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/users' element={<UserList/>} />
          <Route path='/users/:userId' element={<User/>} />
          <Route path='/newUser' element={<NewUser/>} />
          <Route path='/products' element={<ProductList/>} />
          <Route path='/product/:productId' element={<Product/>} />
          <Route path='/newProduct' element={<NewProduct/>} />
        </Routes>
      </div>    
    </Router>
  );
}

export default App;
