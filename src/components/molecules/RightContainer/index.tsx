
import React from "react";
import Container from "../../atoms/Container";
import Text from "../../atoms/Text";
import { BoxIcon } from "./BoxIcon";

interface IRight {
  listMenu: {
    name: string;
    icon: JSX.Element;
  }[],
}

const RightContainer = ({
  listMenu
}: IRight) => {
  return (
    <Container
      width='278px'
      height='300px'
      background='#FFFFFF'
    >
      {
        listMenu.map((menu) => (
          <Text weight='normal' size='sm' padding='8px'>
            <BoxIcon icon={menu.icon} />
            {menu.name}
          </Text>
        ))
      }
    </Container>
  );
};

export default RightContainer