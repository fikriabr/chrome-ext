import Container from '../../components/atoms/Container'
import React, { useEffect, useState } from 'react'
import Text from '../../components/atoms/Text'
import Button from '../../components/atoms/Button'
import { PlusIcon } from '../../components/atoms/Icons'
import Input from '../../components/atoms/Input'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import InputOption from '../../components/atoms/Input/InputOptions'

const CodingSnippet: React.FC = () => {
  const small = InputOption.smallInputStyle

  const [title, setTitle] = useState<string>('')
  const [language, setLanguage] = useState<string>('')
  const [codes, setCodes] = useState<string>('')
  const code = `String name = "My Name";
var data = new List();
`

  type objectType = {
    title: string
    language: string
    code: string
  }
  const [cs, setCS] = useState<objectType[]>([])
  const storeKey = 'CodingSnippet'
  useEffect(() => {
    chrome.storage?.local?.get(storeKey, (data) => {
      if (data[storeKey]) {
        setCS(data[storeKey])
      }
    })
  }, [])

  useEffect(() => {
    Prism.highlightAll();
  }, [cs])

  const doClear = () => {
    setTitle('')
    setLanguage('')
    setCodes('')
  }

  const addNew = () => {
    const data = {
      title: title,
      language,
      code: codes
    }
    cs.push(data)
    console.log('cs', cs)

    chrome.storage.local.set({ [storeKey]: cs })
    doClear()
  }

  return (
    <Container width="100%" height="400px">
      <Text size="xl" weight="bold" padding="0 0 5px 0">
        Coding Snippet
      </Text>
      <Button size="small" variant="contained">
        <span
          style={{
            position: 'absolute',
            left: '10px',
            marginTop: '4px',
          }}
        >
          <PlusIcon width={14} height={14} fill="#ffffff" />
        </span>
        <span style={{ paddingLeft: '20px' }}>New Snippet</span>
      </Button>

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
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          stx={small}
        />
        <Input
          key={'Language-input'}
          type="text"
          label="Language"
          placeholder=""
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          stx={small}
        />
        <Input
          key={'Text-input'}
          type="text"
          label="Text Area"
          placeholder=""
          onChange={(e) => setCodes(e.target.value)}
          value={codes}
          stx={small}
        />
        <Button variant='contained' onClick={addNew}>Save</Button>
      </Container>

      <Container height="auto" stx={{ overflow: 'scroll', paddingBottom: "30px", maxHeight: "150px" }}>
        {
          cs.map((data) => {
            return (
              <div style={{ marginTop: '10px' }}>
                <span>{data?.title}</span>
                <pre
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: '4px',
                    padding: '10px',
                    margin: '0',
                  }}
                >
                  <code className={`language-${data?.language}`}>{data?.code}</code>
                </pre>
              </div>
            )
          })
        }
      </Container>
    </Container>
  )
}

export default CodingSnippet
