import styled from "styled-components";

import { ImageProps } from "./Image.types";

export const Container = styled.img.attrs<ImageProps>(
  ({ dataLabel, src, alt }) => ({
    "data-label": dataLabel,
    alt,
    src,
  })
)<ImageProps>`
  ${({ height }) => height}
  ${({ width }) => width}
`;
