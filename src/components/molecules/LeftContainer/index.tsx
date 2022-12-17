import React from "react"
import Container from "../../atoms/Container"
import Text from "../../atoms/Text"

interface ILeft {
  listMenu: {
    name: string;
    isActive: boolean;
  }[],
  onClick: (name: string) => void;
}

const LeftContainer = ({
  listMenu,
  onClick
}: ILeft) => {
  return (
    <Container
      width="131px"
      height="300px"
      background="#FFFFFF"
      border="1px solid #CCCCCC"
    >
      {
        listMenu.map((menu) => (
          <a onClick={() => onClick(menu.name)}>
            <Text weight={menu.isActive ? "bold" : "normal"} size="sm" padding="7px 5px">
              {menu.name}
            </Text>
          </a>
        ))
      }
    </Container>
  )
}

export default LeftContainer;
