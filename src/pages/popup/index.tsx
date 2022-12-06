import React from 'react'
import ReactDOM from 'react-dom'
import Container from '../../components/atoms/Container'
import Text from '../../components/atoms/Text'

const PopupContainer = () => {
  return (
    <Container width="409px" height="419px">
      <Container width="409px" height="101px" background="#EEEEEE">
        <Text weight="bold" size="xl" color="#1848C2" padding="0 0 15px 0">
          Chrome Tools
        </Text>
        <input value="" type="text" placeholder="Search for a tool" />
      </Container>
      <Container
        width="409px"
        height="318px"
        background="#FFFFFF"
        display="flex"
      >
        <Container width="131px" height="318px" background="#FFFFFF">
          <Text weight="bold" size="sm" padding="5px">
            Work Stuff
          </Text>
          <Text weight="normal" size="sm" padding="5px">
            Weather and Other
          </Text>
        </Container>
        <Container width="278px" height="318px" background="#FFFFFF">
          <Text weight="bold" size="sm" padding="15px 5px">
            Coding Snippets
          </Text>
          <Text weight="normal" size="sm" padding="15px 5px">
            Working Hour Calculator
          </Text>
        </Container>
      </Container>
    </Container>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
document.body.style.margin = '0px'
ReactDOM.render(<PopupContainer />, root)
