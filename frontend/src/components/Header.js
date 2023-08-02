import React from "react";
import "./Header.css";
import Box from "@mui/material/Box";
import { useHistory } from "react-router";

const Header = ({ children }) => {
  const history = useHistory();
  return (
    <Box className="header">
      <Box onClick={() => history.push("/")} className="logo">
        <img src="/xlogo.png" alt="xflix-con"></img>
      </Box>
      {children}
    </Box>
  );
};

export default Header;
