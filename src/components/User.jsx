import { useState } from "react";

const User = ({ name, location }) => {
  const [count, SetCount] = useState(0);
  const [count2, SetCount2] = useState(1);
  return (
    <div className="flex flex-col p-5 border-2 border-solid border-black">
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <h2>Name: {name}</h2>
      <h3>{location}</h3>
      <h4>Contact: @karthiktvs</h4>
    </div>
  );
};

export default User;
