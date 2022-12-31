import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span({
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
})

export const BoxIcon = ({ icon }: { icon: JSX.Element }) => {
  return <StyledSpan>{icon}</StyledSpan>
}
