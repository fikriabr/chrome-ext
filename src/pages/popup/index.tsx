import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Container from '../../components/atoms/Container';
import Text from '../../components/atoms/Text';
import Header from '../../components/molecules/Header';
import LeftContainer from '../../components/molecules/LeftContainer';
import RightContainer from '../../components/molecules/RightContainer';

interface IRightMenu {
  name: string;
  components: JSX.Element | undefined;
}
const leftMenu = [
  {
    name: 'Work Stuff',
    isActive: true,
    menus: [
      {
        name: 'Working Hour Calculator',
        components: <></>
      },
      {
        name: 'Coding Snippets',
        components: <></>
      },
      {
        name: 'Bookmarks',
        components: <></>
      },
      {
        name: 'Notification',
        components: <></>
      },
      {
        name: 'Schedule',
        components: <></>
      },
    ]
  },
  {
    name: 'Weather',
    isActive: false,
    menus: [
      {
        name: 'Himawari 8',
        components: <></>
      },
      {
        name: 'Air Meter',
        components: <></>
      }
    ]
  },
  {
    name: 'Other',
    isActive: false,
    menus: [
      {
        name: 'Documentation',
        components: <></>
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
    <Container width='409px' height='401px'>
      <Header title='Chrome Tools' />
      <Container
        width='409px'
        height='300px'
        background='#FFFFFF'
        display='flex'
      >
        <LeftContainer listMenu={leftMenuState} onClick={handleOnClick} />
        <RightContainer listMenu={rightMenu} />
      </Container>
    </Container>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
document.body.style.margin = '0px';
ReactDOM.render(<PopupContainer />, root);
