import React, { useEffect } from 'react'
import Container from '../../components/atoms/Container'
import { LeftMenu as leftMenu } from './LeftMenu'
import Header from '../../components/molecules/Header'
import LeftContainer from '../../components/molecules/LeftContainer'
import RightContainer from '../../components/molecules/RightContainer'
import Button from '../../components/atoms/Button'
import { CloseIcon } from '../../components/atoms/Icons'

interface IRightMenu {
  name: string
  components: JSX.Element | undefined
  icon: JSX.Element
}

const PopupContainer = () => {
  const [leftMenuState, setLeftMenu] = React.useState<typeof leftMenu>([])
  const [rightMenu, setRightMenu] = React.useState<IRightMenu[]>([])

  const getRightMenu = (selectedLeftMenu: typeof leftMenu) => {
    const activeMenu = selectedLeftMenu.find((menu) => menu.isActive === true)
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
    }))
    setLeftMenu(updatedMenu)
    getRightMenu(updatedMenu)
  }

  type TSubMenu = JSX.Element | null
  const [aciveSubMenu, setActiveSubMenu] = React.useState<TSubMenu>(null)

  const handleClickSubMenu = (subMenuName: string) => {
    setActiveSubMenu(
      rightMenu.find((subMenu) => subMenu.name === subMenuName)?.components ?? (
        <></>
      )
    )
  }

  const getContainerMenus = () => {
    return (
      <>
        {!aciveSubMenu ? (
          <>
            <Header title="Chrome Tools" />
            <Container
              width="409px"
              height="301px"
              background="#FFFFFF"
              display="flex"
            >
              <LeftContainer listMenu={leftMenuState} onClick={handleOnClick} />
              <RightContainer
                listMenu={rightMenu}
                onClick={handleClickSubMenu}
              />
            </Container>
          </>
        ) : (
          <Container
            width="calc(100% - 50px)"
            height="450px"
            padding="25px"
            stx={{ maxHeight: "650px", overflow: "scroll" }}
          >
            <Container
              width="auto"
              height="auto"
              stx={{
                position: 'fixed',
                right: '10px',
                top: '10px',
                zIndex: '100',
              }}
              background="none"
            >
              <Button
                icon={<CloseIcon />}
                onlyIcon
                onClick={() => setActiveSubMenu(null)}
              />
            </Container>
            {aciveSubMenu}
          </Container>
        )}
      </>
    )
  }

  return (
    <Container width="409px" height="403px" background="#EEEEEE">
      {getContainerMenus()}
    </Container>
  )
}

export default PopupContainer
