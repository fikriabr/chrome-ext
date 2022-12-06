import styled from "styled-components";

type TypeContainer = {
  width?: string;
  height?: string;
  display?: string;
  background?: string;
  padding?: string;
}

const StyledContainer = styled.div<TypeContainer>`
  display: ${({ display }) => display};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  padding: ${({ padding }) => padding};
`;

export default StyledContainer;
