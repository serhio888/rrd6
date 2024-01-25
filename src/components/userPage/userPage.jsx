import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();

  return <p>User:{userId}</p>;
};

export default UserPage;
