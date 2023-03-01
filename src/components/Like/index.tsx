import React, { FC } from "react";

// helpers
import { styled } from "@mui/system";

// components
import LikeIcon from "@mui/icons-material/FavoriteBorder";
import LikeFilled from "@mui/icons-material/Favorite";

// styles
import { variables } from "../../assets/styles/variables";

interface IProps {
  isLiked: boolean;
}

type LikeFilledProps = {
  isLiked: boolean;
};

const Like: FC<IProps> = ({ isLiked }) => {
  return isLiked ? <LikeFilledIcon isLiked={isLiked} /> : <LikeIcon />;
};

const LikeFilledIcon = styled(LikeFilled)<LikeFilledProps>(({ isLiked }) => ({
  path: {
    color: isLiked && variables.blue,
  },
}));

export default Like;
