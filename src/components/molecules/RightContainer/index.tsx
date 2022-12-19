
import React from "react";
import Container from "../../atoms/Container";
import Text from "../../atoms/Text";

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
            <div
              style={{
                minWidth: '75px',
                minHeight: '40px',
                background: '#ffffff',
                margin: '5px',
                marginRight: '10px',
                borderRadius: '5px',
                border: '1px solid #999999',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              {menu.icon}
            </div>
            {menu.name}
          </Text>
        ))
      }
    </Container>
  );
};

export default RightContainer