import React, { useState, useEffect } from "react";
// import React from "react";

const User = (props) => {
  const [planet, setPlanet] = useState("earth");
  // const planet = React.useState("earth"); -> if we use "useState" in import , no need to use react here.. 
  
  // componentDidMount
  useEffect(() => {
    console.log("component mounting");
    
    // componentWillUnmount
    console.log("bye bye");
  },[]);

  // componentDidUpdate
  // shouldComponentUpdate
  useEffect(() => {
    console.log("planet changed");
  }, []);

  return (
    <div>
      <h1> {props.name} </h1>
      <p> {props.description} </p>
      <button onClick = {() => setPlanet("pluto")}>
        {planet}
      </button>
    </div>
  );
};

export default User;