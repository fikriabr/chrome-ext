import React from 'react'
import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import { BoxIcon } from './BoxIcon'

interface IRight {
  listMenu: {
    name: string
    icon: JSX.Element
  }[]
  onClick: (name: string) => void
}

const RightContainer = ({ listMenu, onClick }: IRight) => {
  return (
    <Container
      width="278px"
      height="300px"
      background="#FFFFFF"
      stx={{
        overflowY: 'auto',
      }}
    >
      {listMenu.map((menu, index) => (
        <a
          onClick={() => onClick(menu.name)}
          key={`${String(index)}-rightIndex`}
        >
          <Text weight="normal" size="sm" padding="8px" hover>
            <BoxIcon icon={menu.icon} />
            {menu.name}
          </Text>
        </a>
      ))}
    </Container>
  )
}

export default RightContainer
