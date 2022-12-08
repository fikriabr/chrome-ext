import React from 'react'
import { StyledContainer } from '../style'

interface IContainer {
  children: JSX.Element | string | JSX.Element[]
  width?: string
  height?: string
  display?: string
  background?: string
  padding?: string
  border?: string
}

const Container: React.FC<IContainer> = ({
  children,
  width,
  height,
  display,
  background,
  padding,
  border,
}) => {
  return (
    <StyledContainer
      width={width}
      height={height}
      display={display}
      background={background}
      padding={padding}
      border={border}
    >
      {children}
    </StyledContainer>
  )
}

const defaultProps: IContainer = {
  children: '',
  width: '100%',
  height: '100vh',
  display: 'block',
  background: '#ffffff',
  padding: '0',
  border: 'none',
}
Container.defaultProps = defaultProps

export default Container
