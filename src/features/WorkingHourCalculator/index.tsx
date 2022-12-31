import React from 'react'
import Container from '../../components/atoms/Container'
import Input from '../../components/atoms/Input'
import Text from '../../components/atoms/Text'

const WorkingHourCalculator = () => {
  return (
    <Container width="100%" height="301px">
      <Text size="xl" weight="bold" padding="0 0 10px 0">
        Working Hour Calculator
      </Text>
      <Input width="360px" type="text" label="Last Entry" padding="10px 0" />
      <Container
        width="360px"
        height="auto"
        stx={{ display: 'flex', gap: '10px' }}
      >
        <Input width="175px" type="number" label="Hour" padding="10px 0" />
        <Input width="175px" type="number" label="Min" padding="10px 0" />
      </Container>
    </Container>
  )
}

export default WorkingHourCalculator
