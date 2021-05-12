import React from "react";
import { Me } from "./Me";
import { He } from "./He";

export function GoodMorning(props) {
  //  return <h1> Hello, {props.name}! Сейчас: {new Date().toLocaleTimeString()}!</h1>;
  //return <p> Hello, <Me name={props.name} age={myAge}/> Сейчас: {new Date().toLocaleTimeString()}!</p>;
  return <div> 
    Hello, 
      {React.createElement(Me, { ...props, age: "41" })} 
      Сейчас: {new Date().toLocaleTimeString()}!
      <hr/>
      Best regards: <He name="X" age="- возраст не известен"/>
      
  </div>;

}
