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
  overflow-y: auto;
`;


const getFontPixelsSize = (size: string) => {
  switch (size) {
    case "xs":
      return "12px";
    case "sm":
      return "14px";
    case "md":
      return "16px";
    case "lg":
      return "18px";
    case "xl":
      return "20px";
    case "xxl":
      return "24px";
    default:
      return "34px";
  }
};

type TypeText = {
  size?: string,
  weight?: string,
  color?: string,
  padding?: string,
  background?: string,
}

const StyledText = styled.p<TypeText>`
  font-size: ${({ size }) => getFontPixelsSize(size ?? "")};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  margin: 0;
  padding: ${({ padding }) => padding || "none"};
  background: ${({ background }) => background || ""};
  font-family: Lato, sans-serif;
  display: flex;
  align-items: center;
  &:hover {
    font-weight: bold;
  }
`;

export {
  StyledContainer,
  StyledText
};
