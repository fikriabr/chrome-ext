import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Container from '../../components/atoms/Container';
import { LeftMenu as leftMenu } from './LeftMenu'
import Header from '../../components/molecules/Header';
import LeftContainer from '../../components/molecules/LeftContainer';
import RightContainer from '../../components/molecules/RightContainer';

interface IRightMenu {
  name: string;
  components: JSX.Element | undefined;
  icon: JSX.Element;
}

const PopupContainer = () => {
  const [leftMenuState, setLeftMenu] = React.useState<typeof leftMenu>([]);
  const [rightMenu, setRightMenu] = React.useState<IRightMenu[]>([]);

  const getRightMenu = (selectedLeftMenu: typeof leftMenu) => {
    const activeMenu = selectedLeftMenu.find((menu) => menu.isActive === true);
    if (activeMenu) {
      setRightMenu(activeMenu.menus)
    }
  }

  useEffect(() => {
    setLeftMenu(leftMenu)
    getRightMenu(leftMenu)
  }, [])

  const handleOnClick = (menu: string) => {
    const updatedMenu = leftMenuState.map((data) => ({
      ...data,
      isActive: false,
      ...(data.name === menu ? { isActive: true } : {}),
    }));
    setLeftMenu(updatedMenu);
    getRightMenu(updatedMenu)
  };

  return (
    <Container
      width='409px'
      height='403px'
      background='#EEEEEE'
    >
      <Header title='Chrome Tools' />
      <Container
        width='409px'
        height='301px'
        background='#FFFFFF'
        display='flex'
      >
        <LeftContainer listMenu={leftMenuState} onClick={handleOnClick} />
        <RightContainer listMenu={rightMenu} />
      </Container>
    </Container>
  );
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url('./Lato-Regular.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Lato';
    src: url('./Lato-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }
`;

const Popup = () => {
  return (
    <>
      <GlobalStyle />
      <PopupContainer />
    </>
  )
}

const root = document.createElement('div');
document.body.appendChild(root);
document.body.style.margin = '0px';
ReactDOM.render(<Popup />, root);
