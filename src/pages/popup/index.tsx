import React from 'react'
import ReactDOM from 'react-dom'
import Container from '../../components/atoms/Container'
import { BuildCircleIcon, SearchIcon24 } from '../../components/atoms/Icons'
import Input from '../../components/atoms/Input'
import Text from '../../components/atoms/Text'

const Header = () => {
  return (
    <Container width="389px" height="81px" background="#EEEEEE" padding="10px">
      <Text weight="bold" size="xl" color="#1848C2" padding="0 0 10px 0">
        <BuildCircleIcon /> Chrome Tools
      </Text>
      <Input icon={<SearchIcon24 />} />
    </Container>
  )
}

const LeftContainer = () => {
  return (
    <Container
      width="131px"
      height="318px"
      background="#FFFFFF"
      border="1px solid #CCCCCC"
    >
      <Text weight="bold" size="xs" padding="5px">
        Work Stuff
      </Text>
      <Text weight="normal" size="xs" padding="5px">
        Weather and Other
      </Text>
    </Container>
  )
}

const RightContainer = () => {
  return (
    <Container
      width="278px"
      height="318px"
      background="#FFFFFF"
      border="1px solid #CCCCCC"
    >
      <Text weight="bold" size="xs" padding="15px 5px">
        Coding Snippets
      </Text>
      <Text weight="normal" size="xs" padding="15px 5px">
        Working Hour Calculator
      </Text>
    </Container>
  )
}

const PopupContainer = () => {
  return (
    <Container width="409px" height="419px">
      {Header()}
      <Container
        width="409px"
        height="318px"
        background="#FFFFFF"
        display="flex"
      >
        {LeftContainer()}
        {RightContainer()}
      </Container>
    </Container>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
document.body.style.margin = '0px'
ReactDOM.render(<PopupContainer />, root)
