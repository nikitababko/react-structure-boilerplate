import React from "react";

import { ImageProps } from "./Image.types";
import { Container } from "./Image.styles";

export const Image: React.FC<ImageProps> = (props) => {
  return <Container {...props} />;
};
