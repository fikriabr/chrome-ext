import React from 'react'
import Container from '../../atoms/Container'
import { BuildCircleIcon, SearchIcon24 } from '../../atoms/Icons'
import Input from '../../atoms/Input'
import Text from '../../atoms/Text'

interface IHeader {
  title: string
}
const Header = ({ title }: IHeader) => {
  return (
    <Container width="379px" height="82px" background="#EEEEEE" padding="15px">
      <Text weight="bold" size="xl" color="#444444" padding="0 0 10px 0">
        <BuildCircleIcon />
        &nbsp; {title}
      </Text>
      <Input icon={<SearchIcon24 />} placeholder="Search for a tool" />
    </Container>
  )
}

export default Header
