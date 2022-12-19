import React from 'react'
import { StyledContainer } from '../style'

interface IContainer {
  children: JSX.Element | string | JSX.Element[] | React.ReactNode
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
}) => {
  return (
    <StyledContainer
      width={width}
      height={height}
      display={display}
      background={background}
      padding={padding}
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
}
Container.defaultProps = defaultProps

export default Container
