import { variables } from "../../assets/styles/variables";

export const styles = {
  position: "sticky",
  padding: `0 ${variables.paddingXL}`,
  height: "60px",
  display: "flex",
  flexDirection: "initial",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: variables.white,
  zIndex: 2,
  userInfoBlock: {
    display: "flex",
    alignItems: "center",
  },
  p: {
    color: variables.dark,
  },
  svg: {
    "&:hover": {
      path: {
        color: variables.blue,
      },
    },
  },
};
