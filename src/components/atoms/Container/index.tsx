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
  stx?: {
    [key: string]: string
  }
}

const Container: React.FC<IContainer> = ({
  children,
  width,
  height,
  display,
  background,
  padding,
  stx,
}) => {
  return (
    <StyledContainer
      stx={{
        width,
        height,
        display,
        background,
        padding,
        ...stx,
      }}
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
