import React from "react";
import { Button } from "@mui/material";
// import { colorStart, colorEnd, colorTxt } from "../styles/variables";
// import { color1, color2, color3, color4 } from "../styles/variables";
import { gradientBg } from "../styles/variables";

const MyButton = ({ children, href, type = "button", onClick, ...props }) => {
  const buttonStyle = {
    background: gradientBg,
    // `linear-gradient(to right, ${color1}, ${color2}, ${color3}, ${color4})`,
    color: `black`,
    borderRadius: "40px",
    padding: "8px 26px",
    fontSize: "14px",
    fontWeight: 600,
    marginTop: "20px",
    textTransform: "none",
    cursor: "pointer",
    // "&:hover": {
    //   background: `linear-gradient(to right, ${colorEnd}, ${colorStart})`,
    // },
  };

  return href ? (
    <Button
      component="a"
      href={href}
      variant="contained"
      sx={buttonStyle}
      {...props}
    >
      {children}
    </Button>
  ) : (
    <Button
      type={type}
      onClick={onClick}
      variant="contained"
      sx={buttonStyle}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MyButton;
