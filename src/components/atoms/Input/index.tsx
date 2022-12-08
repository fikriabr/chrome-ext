import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

interface IInput {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>
  width?: string
  height?: string
  display?: string
  background?: string
  padding?: string
  border?: string
  icon?: JSX.Element
}

const Input: React.FC<IInput> = ({
  onChange,
  onKeyDown,
  width,
  height,
  display,
  background,
  padding,
  border,
  icon,
}) => {
  return (
    <TextField
      id="input-with-sx"
      placeholder="Search for a tool"
      variant="outlined"
      onChange={onChange}
      onKeyDown={onKeyDown}
      fullWidth={true}
      size="small"
      InputProps={{
        endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
      }}
      sx={{
        backgroundColor: '#FFFFFF',
      }}
    />
  )
}

export default Input
