import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

interface IInput {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>
  label?: string
  type?: string
  placeholder?: string
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
  placeholder,
  type,
  width,
  height,
  display,
  background,
  padding,
  border,
  icon,
  label,
}) => {
  return (
    <div style={{ padding }}>
      <TextField
        id="input-with-sx"
        label={label}
        type={type}
        placeholder={placeholder}
        variant="outlined"
        onChange={onChange}
        onKeyDown={onKeyDown}
        fullWidth={true}
        size="small"
        InputProps={{
          endAdornment: icon ? (
            <InputAdornment position="end">{icon}</InputAdornment>
          ) : null,
        }}
        sx={{
          backgroundColor: '#FFFFFF',
          width,
          height,
          display,
          background,
          border,
        }}
      />
    </div>
  )
}

const defaultProps: IInput = {
  onChange: () => undefined,
  onKeyDown: () => undefined,
  placeholder: '',
  width: '100%',
  height: '40px',
  display: 'block',
  background: '#FFFFFF',
  padding: '0',
  border: 'none',
  type: 'text',
  label: '',
}
Input.defaultProps = defaultProps

export default Input
