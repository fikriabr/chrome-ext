
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
  const IconContainer = ({
    icon
  }: { icon: JSX.Element }) => {
    return (
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
        {icon}
      </div>
    )
  }
  return (
    <Container
      width='278px'
      height='300px'
      background='#FFFFFF'
    >
      {
        listMenu.map((menu) => (
          <Text weight='normal' size='sm' padding='8px'>
            <IconContainer icon={menu.icon} />
            {menu.name}
          </Text>
        ))
      }
    </Container>
  );
};

export default RightContainer