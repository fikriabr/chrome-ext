
import React from "react";
import Container from "../../atoms/Container";
import Text from "../../atoms/Text";

interface IRight {
  listMenu: {
    name: string;
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
      border='1px solid #CCCCCC'
    >
      {
        listMenu.map((menu) => (
          <Text weight='normal' size='sm' padding='8px'>
            <div
              style={{
                width: '75px',
                height: '40px',
                background: '#ffffff',
                margin: '5px',
                marginRight: '10px',
                borderRadius: '5px',
                border: '1px solid #999999'
              }}
            >
              &nbsp;
            </div>
            {menu.name}
          </Text>
        ))
      }
    </Container>
  );
};

export default RightContainer