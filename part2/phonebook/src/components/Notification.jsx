import React from "react";

const successStyle = {
  backgroundColor: "#f6ffed",
  border: "1px solid #b7eb8f",
  color: "#52c41a",  
  transition: "opacity 2s linear",
  height: "30px",
  padding: 5,
  opacity: 1,
};
const errorStyle = {
  backgroundColor: "#fff1f0",
  border: "1px solid #ffa39e",
  color: "#f5222d",
  padding: 5,
  height: "30px",
  opacity: 1,
};

const notificationStyle = {
  width: "100%",
  borderRadius: 5,
  boxSizing: "border-box",
  height: 0,
  opacity: 0,  
  transition: "opacity 2s linear",
  textAlign: "center",
};

const Notification = ({ message, type }) => {
  const styleObj = {
    success: successStyle,
    error: errorStyle,
  };
  const totalStyle = {
    ...notificationStyle,
    ...styleObj[type],
  };
  return <div style={totalStyle}>{message}</div>;
};

export default Notification;
