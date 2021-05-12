import React from "react";

function Sum(a, b) {
  return a + b;
}

function Inc(x){
  x+="x";
  return x;
}

export function Me(props) {
  //console.log(props);
  const age = Sum(Number.parseInt(props.age),10); 
  const age2 = Inc(props.age);
  return (
    <h1>
      <strong>{props.name}</strong> {age}! ({age} - {age2})
    </h1>
  );
}
