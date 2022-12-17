import React from 'react'
import { StyledText } from '../style'

interface IText {
  children: React.ReactNode
  size?: string
  weight?: string
  color?: string
  padding?: string
  background?: string
}

const defaultProps: IText = {
  size: 'sm',
  weight: 'normal',
  color: 'black',
  children: '',
  padding: '0',
  background: '',
}

const Text: React.FC<IText> = ({ children, size, weight, color, padding, background }) => {
  return (
    <StyledText size={size} weight={weight} color={color} padding={padding} background={background}>
      {children}
    </StyledText>
  )
}

Text.defaultProps = defaultProps

export default Text
