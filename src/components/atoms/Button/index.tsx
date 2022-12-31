import { IconButton, Button as MUIButton } from '@mui/material'
import React from 'react'

interface IButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  icon?: JSX.Element
  onlyIcon?: boolean
  children?: string
  variant?: 'text' | 'outlined' | 'contained'
  size?: 'small' | 'medium' | 'large'
}

const Button: React.FC<IButton> = ({
  icon,
  onClick,
  children,
  variant,
  onlyIcon,
  size,
}) => {
  return onlyIcon ? (
    <IconButton aria-label="icon" size={size} onClick={onClick}>
      {icon}
    </IconButton>
  ) : (
    <MUIButton onClick={onClick} variant={variant} size={size}>
      {children}
    </MUIButton>
  )
}

const defaultProps: IButton = {
  variant: 'outlined',
  onlyIcon: false,
  children: '',
  size: 'small',
}
Button.defaultProps = defaultProps

export default Button
