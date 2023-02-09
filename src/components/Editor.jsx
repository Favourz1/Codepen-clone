import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import editorStyles from './Editor.module.css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

export default function Editor({displayName, language, value, onChange, setWelcomeText}) {

  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value){
      setWelcomeText(false)
      onChange(value)
  }

  return (  
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
          {displayName}
          <button
            className={editorStyles['expand-collapse-button']}
            onClick={() => setOpen(prevOpen => !prevOpen)}
          >
           <FontAwesomeIcon 
            icon={open ? faCompressAlt : faExpandAlt}
           /> 
          </button>
      </div>
      <ControlledEditor 
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode:language,
          lineNumbers: true,
          theme: 'material'
        }}
      />
    </div>
  )
}
