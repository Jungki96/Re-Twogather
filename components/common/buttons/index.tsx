import React, { ReactNode, MouseEventHandler } from "react";
import { styled } from "@mui/system";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return <StButton onClick={onClick}>{children}</StButton>;
};

export default Button;

// @mui/system의 styled 함수를 사용할 때 테마에 접근하려고 theme을 포함
// const StButton = styled("button")(({ theme }) => ({
//     width: "100px",
//     height: "50px",
//     backgroundColor: 'white', // Default background color
//     color: 'black', // Default text color
//     '&:hover': {
//       backgroundColor: 'purple', // Red and blue mix
//       color: 'white', // On hover text color
//     }
//   }));

const StButton = styled("button")({
  width: "100px",
  height: "50px",
  backgroundColor: "white", // Default background color
  color: "black", // Default text color
  "&:hover": {
    backgroundColor: "purple", // Red and blue mix
    color: "white", // On hover text color
  },
});
