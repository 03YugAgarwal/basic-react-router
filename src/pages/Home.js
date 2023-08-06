import React from "react";
import { Link , useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    function navigateHandlr (){
        navigate('/product')
    }

  return (
    <>
      <h1>Home</h1>
      <div>
        <Link to="/product">Go to Product</Link>
        <button onClick={navigateHandlr}>Navigate</button>
      </div>
    </>
  );
};

export default Home;
