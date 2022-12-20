import styled from "styled-components";

interface IDynamic extends React.HTMLAttributes<HTMLElement> {
  stx: {
    [key: string]: string | undefined
  }
}

const StyledContainer = styled.div<IDynamic>(({ stx }) =>
  Object.keys(stx ?? {}).map((key) => ({
    [key]: stx[key]
  }))
);

const fontSize = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  xxl: "24px",
  default: "34px"
}
const getFontPixelsSize = (size: string) => {
  switch (size) {
    case "xs":
    case "sm":
    case "md":
    case "lg":
    case "xl":
    case "xxl":
      return fontSize[size]
    default:
      return fontSize.default;
  }
};

const StyledTextTemp = styled.p<IDynamic>(({ stx }: IDynamic) => {
  const getObject = Object.keys(stx ?? {}).map((key) => {
    if (key === 'fontSize') {
      return { [key]: getFontPixelsSize(stx[key] ?? "") }
    } else {
      return { [key]: stx[key] }
    }
  })
  return Object.assign({}, ...getObject)
})

const StyledText = styled(StyledTextTemp)`
  margin: 0;
  font-family: Lato, sans-serif;
  display: flex;
  align-items: center;
  &:hover {
    font-weight: bold;
  }
`

export {
  StyledContainer,
  StyledText
};
