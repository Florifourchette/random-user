import React from "react";

export default function Contact({ user }) {
  return (
    <div>
      <p>Address:{user.address} </p>
      <p>Email: {user.email}</p>
      <p>Phone number: {user.phone}</p>
    </div>
  );
}
