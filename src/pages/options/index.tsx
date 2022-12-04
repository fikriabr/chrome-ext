import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@mui/material/Button'
import { BoxedOption } from './styles'

const options = () => {
  return (
    <>
      <BoxedOption>
        <Button variant="contained">Sample Button</Button>
        <p>Hello From Options</p>
      </BoxedOption>
    </>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(options(), root)
