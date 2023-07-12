import React from "react";
import { useNavigate } from "react-router-dom";

const InvalidURL = (props) => {
  let navigate = useNavigate();
  navigate("/");

  return <>{props.showAlert("Invalid URL Kindly Recheck", "info")}</>;
};

export default InvalidURL;
