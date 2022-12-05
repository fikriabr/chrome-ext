import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@mui/material/Button'
import { BoxedOption } from './styles'
import Text from '../../components/atoms/Text'

const options = () => {
  return (
    <>
      <BoxedOption>
        <Button variant="contained">Sample Button</Button>
        <Text>Hello From Options</Text>
      </BoxedOption>
    </>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(options(), root)
