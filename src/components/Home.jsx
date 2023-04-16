import React, { useContext } from "react";
import { AuthContext } from "../Probiders/AuthProviders";

const Home = () => {
  const {user} = useContext(AuthContext);
  return <div>
    <p>My name is {user && user.displayName}</p></div>;
};

export default Home;
