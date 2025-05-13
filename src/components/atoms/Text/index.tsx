import React from 'react'
import { StyledText } from '../style'

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
interface IText {
  children: React.ReactNode
  size?: Sizes
  weight?: string
  color?: string
  padding?: string
  background?: string
  hover?: boolean
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
  hover: false,
}

const Text: React.FC<IText> = ({
  children,
  size,
  weight,
  color,
  padding,
  background,
  hover,
  stx,
}) => {
  return (
    <StyledText
      stx={{
        fontSize: size,
        fontWeight: weight,
        color,
        padding,
        background,
        ...stx,
      }}
      hover={hover}
    >
      {children}
    </StyledText>
  )
}

Text.defaultProps = defaultProps

export default Text
