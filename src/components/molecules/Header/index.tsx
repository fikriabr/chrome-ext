import React from "react"
import Container from "../../atoms/Container"
import { BuildCircleIcon, SearchIcon24 } from "../../atoms/Icons"
import Input from "../../atoms/Input"
import Text from "../../atoms/Text"

interface IHeader {
  title: string
}
const Header = ({ title }: IHeader) => {
  return (
    <Container width="389px" height="81px" background="#EEEEEE" padding="10px">
      <Text weight="bold" size="xxl" color="#1848C2" padding="0 0 10px 0">
        <BuildCircleIcon />&nbsp; {title}
      </Text>
      <Input icon={<SearchIcon24 />} />
    </Container>
  )
}

export default Header