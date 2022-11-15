import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar";
import Cats from "./components/Cats/Cats";
import ViewCat from "./components/Cats/ViewCat";
import Dogs from "./components/Dogs/Dogs";
import ViewDog from "./components/Dogs/viewDog";
import About from "./components/About/About";
import "./App.css"
import "./index.css";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import {
  Route,
  Routes
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  
 return (
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats" element={<Cats/>} /> 
          <Route path={`/cats/viewcat/:id`} element={<ViewCat/>} /> 
          <Route path="/dogs" element={<Dogs />} /> 
          <Route path= {`/dogs/viewdog/:id`} element={<ViewDog/>} />
          <Route path="/about" element={<About />}/>
          <Route path="/account" element={<Login />}/>
        </Routes>
        <Footer />
      </div> 
 );
};
 
export default App;





/*
<Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       */