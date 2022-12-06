import styled from "styled-components";

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
  padding?: string
}

const StyledText = styled.p<TypeText>`
  font-size: ${({ size }) => getFontPixelsSize(size ?? "")};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  margin: 0;
  padding: ${({ padding }) => padding || "none"};
  font-family: "Gill Sans", sans-serif;
`;

export default StyledText;