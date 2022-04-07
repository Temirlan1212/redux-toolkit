import React from "react";

import { useSelector } from "react-redux";

const FirstName = () => {
  const name = useSelector((state) => state.user.firstName);
  return <div>{name}</div>;
};

export default FirstName;
