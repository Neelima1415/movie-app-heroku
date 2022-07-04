import React, { useState, useEffect }from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

import 'bootstrap/dist/css/bootstrap.min.css';



const Logout = () => {
  const { logOut, user } = useUserAuth();  
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };


return (
    <>     
        <div className="btn" style={ {paddingTop: 5, display: 'flex', justifyContent: 'right',paddingRight: 5 } }>

         <Button variant="default"  style={{ color: "black", background: "white",}}
           onClick={handleLogout} >
          Log out
        </Button>

      </div> 
   </>
   );
}

export default Logout;
