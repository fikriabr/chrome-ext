import React from "react"

export const BoxIcon = ({
  icon
}: { icon: JSX.Element }) => {
  return (
    <span
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
    </span>
  )
}