import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Route components
import Accounts from './UserLayout/pages/Accounts/Accounts'; // Imported as Accounts
import Cart from './UserLayout/pages/Cart/Cart';
import Home from './UserLayout/pages/Homepage/Home';
import Login from './UserLayout/pages/Login/Login';
import Orders from './UserLayout/pages/Orders/Orders';
import Products from './UserLayout/pages/Products/Products';
import Register from './UserLayout/pages/Register/Register';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Accounts />} /> {/* Use Accounts component */}
          <Route path="/orders" element={<Orders />} />
          <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
        </Routes>

      </>
    </Router>
  );
}

export default App;
