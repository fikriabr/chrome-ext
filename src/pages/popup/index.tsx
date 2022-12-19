import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Container from '../../components/atoms/Container';
import {
  Air32,
  Bookmarks32,
  CalendarToday32,
  CodeSnippet32,
  Notification32,
  Satellite32,
  Schedule32,
  Source32,
} from '../../components/atoms/Icons';
import Header from '../../components/molecules/Header';
import LeftContainer from '../../components/molecules/LeftContainer';
import RightContainer from '../../components/molecules/RightContainer';

interface IRightMenu {
  name: string;
  components: JSX.Element | undefined;
  icon: JSX.Element;
}
const leftMenu = [
  {
    name: 'Work Stuff',
    isActive: true,
    menus: [
      {
        name: 'Working Hour Calculator 123',
        components: <></>,
        icon: <Schedule32 />
      },
      {
        name: 'Coding Snippets',
        components: <></>,
        icon: <CodeSnippet32 />
      },
      {
        name: 'Bookmarks',
        components: <></>,
        icon: <Bookmarks32 />
      },
      {
        name: 'Notification',
        components: <></>,
        icon: <Notification32 />
      },
      {
        name: 'Schedule',
        components: <></>,
        icon: <CalendarToday32 />
      },
    ]
  },
  {
    name: 'Weather',
    isActive: false,
    menus: [
      {
        name: 'Himawari 8',
        components: <></>,
        icon: <Satellite32 />
      },
      {
        name: 'Air Meter',
        components: <></>,
        icon: <Air32 />
      }
    ]
  },
  {
    name: 'Other',
    isActive: false,
    menus: [
      {
        name: 'Documentation',
        components: <></>,
        icon: <Source32 />
      },
    ]
  },
];

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
