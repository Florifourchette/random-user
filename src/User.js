import React from "react";
import Contact from "./Contact";

export default function User({ picture, name, age, ...restOfObject }) {
  console.log(picture);
  return (
    <div>
      <img src={picture} alt="name" />
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <Contact {...restOfObject} />
    </div>
  );
}
