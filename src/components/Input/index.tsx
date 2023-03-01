import React, { FC } from "react";

// components
import { TextField } from "@mui/material";

// styles
import { styles } from "./styles";

type InputType = "text" | "password";

interface IProps {
  placeholder: string;
  type: InputType;
}

const Input: FC<IProps> = ({ ...rest }) => {
  return <TextField sx={styles} {...rest} />;
};

export default Input;
