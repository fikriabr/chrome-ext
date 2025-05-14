import React from 'react';
import Button from "../../components/atoms/Button"
import Container from "../../components/atoms/Container"
import Input from "../../components/atoms/Input"
import InputOption from "../../components/atoms/Input/InputOptions"

interface Prop {
  options: {
    doSetTitle: (title: string) => void
    doSetLanguage: (lang: string) => void
    doSetCodes: (codeText: string) => void
  }
  title: string
  language: string
  codes: string
  addNew: () => void
}
const Form: React.FC<Prop> = ({
  options,
  title,
  language,
  codes,
  addNew
}) => {
  const small = InputOption.smallInputStyle
  return (
    <Container
      width="100%"
      height="auto"
      padding='10px 0 0 0'
    >
      <Input
        key={'Title-input'}
        type="text"
        label="Title"
        placeholder=""
        onChange={(e) => options.doSetTitle(e.target.value)}
        value={title}
        stx={small}
      />
      <Input
        key={'Language-input'}
        type="text"
        label="Language"
        placeholder=""
        onChange={(e) => options.doSetLanguage(e.target.value)}
        value={language}
        stx={small}
      />
      <Input
        key={'Text-input'}
        type="text"
        label="Text Area"
        placeholder=""
        onChange={(e) => options.doSetCodes(e.target.value)}
        value={codes}
        stx={InputOption.smallInputTextArea}
        multiline
      />
      <div style={{ display: 'flex', marginTop: "10px" }}>
        <Button variant='contained' onClick={addNew}>
          <span style={{ fontSize: '10px' }}>
            Save
          </span>
        </Button>
      </div>

    </Container>
  )
}

export default Form
