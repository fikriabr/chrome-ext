import Prism from 'prismjs'
import React, { useEffect, useState } from 'react'
import Form from './Form'
import Button from '../../components/atoms/Button'
import Container from '../../components/atoms/Container'
import Text from '../../components/atoms/Text'
import localStorage from '../../utils/localStorage'
import { CloseIcon } from '../../components/atoms/Icons'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-python'

const CodingSnippet: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [language, setLanguage] = useState<string>('')
  const [codes, setCodes] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)
  const [codeSnippets, setCodeSnippets] = useState<objectType[]>([])

  type objectType = {
    id: number
    title: string
    language: string
    code: string
  }

  const { getLocalStorage, setLocalStorage } = localStorage()
  const storeKey = 'CodingSnippet'
  useEffect(() => {
    getLocalStorage<objectType[]>(storeKey, (value) => setCodeSnippets(value))
  }, [])

  useEffect(() => {
    Prism.highlightAll()
  }, [codeSnippets])

  const doClear = () => {
    setTitle('')
    setLanguage('')
    setCodes('')
    setIsOpen(false)
  }

  const formOptions = {
    doSetTitle: (title: string) => setTitle(title),
    doSetLanguage: (lang: string) => setLanguage(lang),
    doSetCodes: (codeText: string) => setCodes(codeText),
  }

  const addNew = () => {
    if (!(title && language && codes)) {
      return
    }
    const data = {
      id: (codeSnippets[codeSnippets.length - 1]?.id ?? 0) + 1,
      title,
      language,
      code: codes,
    }
    const newCode = [...codeSnippets, data]
    setCodeSnippets(newCode)
    setLocalStorage(storeKey, newCode)
    doClear()
  }

  const deleteRecord = (id: number) => {
    const filtered = codeSnippets.filter((data) => data.id !== id)
    setCodeSnippets(filtered)
    setLocalStorage(storeKey, filtered)
  }

  return (
    <Container width="100%" height="400px">
      <Text size="xl" weight="bold" padding="0 0 5px 0" stx={{ position: "sticky" }}>
        Coding Snippet
      </Text>
      <Button
        size="small"
        variant="outlined"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ paddingLeft: '4px', fontSize: '10px' }}>
          {isOpen ? 'Close' : 'Add New'}
        </span>
      </Button>

      {isOpen && (
        <Form
          options={formOptions}
          title={title}
          language={language}
          codes={codes}
          addNew={addNew}
        />
      )}

      <Container
        height="auto"
        stx={{ paddingBottom: '30px' }}
      >
        {codeSnippets.map((data) => {
          return (
            <div
              style={{ marginTop: '10px', position: 'relative' }}
              key={data.title}
            >
              <Button
                size="small"
                variant="outlined"
                onClick={() => deleteRecord(data.id)}
                stx={{ position: 'absolute', right: '0px', top: "-5px" }}
                icon={<CloseIcon width={16} height={16} />}
                onlyIcon
              />
              <p>{data?.title}</p>
              <pre
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  padding: '10px',
                  marginTop: '10px',
                }}
              >
                <code className={`language-${data?.language}`}>
                  {data?.code}
                </code>
              </pre>
            </div>
          )
        })}
      </Container>
    </Container>
  )
}

export default CodingSnippet
