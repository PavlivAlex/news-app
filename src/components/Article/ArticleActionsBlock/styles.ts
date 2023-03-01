import { variables } from "../../../assets/styles/variables";

export const styles = {
  svgStyles: {
    display: "flex",
    position: "absolute",
    top: 5,
    right: 5,
    svg: {
      "&:hover": {
        path: {
          color: variables.blue,
        },
      },
    },
    div: {
      cursor: "pointer",
    },
  },
};
