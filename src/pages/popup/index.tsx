import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from '../../components/templates/GlobalStyles'
import PopupContainer from '../../features/PopupContainer'

const Popup = () => {
  return (
    <>
      <GlobalStyle />
      <PopupContainer />
    </>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
document.body.style.margin = '0px'
ReactDOM.render(<Popup />, root)
