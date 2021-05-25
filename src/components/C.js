import React, { useState } from "react";
import { useStateContext } from "../contexts/FunctionalProvider";
//import axios from "axios";
// with functional comps you dont need to wrap anything around with the consumer tag

const C = (props) => {
  const context = useStateContext();

  //   const [jsonplaceholder, setJsonplaceholder] = useState("");

  //   const fetchTitle = async () => {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  //     setJsonplaceholder(res.data);
  //   };

  //   console.log(context.state);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100px",
        flexDirection: "column",
        background: "black",
        color: "white",
        fontSize: "1.2rem",
      }}
    >
      C<h2>Name: {context.state.name}</h2>
      {props.children}
    </div>
  );
};

export default C;
