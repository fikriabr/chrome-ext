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
      background="#EEEEEE"
    >
      {
        listMenu.map((menu) => (
          <a onClick={() => onClick(menu.name)}>
            <Text
              weight={menu.isActive ? "bold" : "normal"}
              size="sm"
              padding="15px 10px"
              background={
                menu.isActive ? "linear-gradient(0deg, #ebf2ff, #f6f6ff)" : "unset"
              }
            >
              {menu.name}
            </Text>
          </a>
        ))
      }
    </Container>
  )
}

export default LeftContainer;
