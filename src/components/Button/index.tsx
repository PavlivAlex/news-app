import React, { FC, ReactNode } from "react";

// components
import { Button as MUIButton } from "@mui/material";

// styles
import { styles } from "./styles";

type VariantType = "text" | "outlined" | "contained" | undefined;

interface IProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: VariantType;
}

const Button: FC<IProps> = ({ children, variant = "contained", ...rest }) => {
  return (
    <MUIButton {...rest} sx={styles} variant={variant}>
      {children}
    </MUIButton>
  );
};

export default Button;
