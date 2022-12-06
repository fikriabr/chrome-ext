import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@mui/material/Button'
import { BoxedOption } from './styles'
import Text from '../../components/atoms/Text'

const Options = () => {
  return (
    <>
      <BoxedOption>
        <Text size="xl">My Chrome Extention Tool - Options</Text>
        <Button variant="contained">Sample Button</Button>
        <Text>Hello From Options</Text>
      </BoxedOption>
    </>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<Options />, root)
