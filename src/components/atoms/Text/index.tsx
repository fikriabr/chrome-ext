import React from 'react'
import { StyledText } from '../style'

interface IText {
  children: React.ReactNode
  size?: string
  weight?: string
  color?: string
  padding?: string
  background?: string
  stx?: {
    [key: string]: string
  }
}

const defaultProps: IText = {
  size: 'sm',
  weight: 'normal',
  color: 'black',
  children: '',
  padding: '0',
  background: '',
}

const Text: React.FC<IText> = ({
  children,
  size,
  weight,
  color,
  padding,
  background,
  stx
}) => {
  return (
    <StyledText
      stx={{
        fontSize: size,
        fontWeight: weight,
        color,
        padding,
        background,
        ...stx
      }}
    >
      {children}
    </StyledText>
  );
};

Text.defaultProps = defaultProps

export default Text
