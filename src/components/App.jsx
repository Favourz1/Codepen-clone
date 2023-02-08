import React,{ useState} from "react"

import Editor from "./Editor"

export default function App() {

  const [html, setHtml] = useState(' ')
  const [css, setCss] = useState(' ')
  const [javascript, setJavascript] = useState(' ')

  return (
    <div className="pane-container">
      <div className="pane top-pane">
        <Editor
          displayName="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        />
        <Editor
          displayName="CSS"
          language="css"
          value={css}
          onChange={setCss}
        />
        <Editor
          displayName="Javascript"
          language="javascript"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div  className="pane bottom-pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
    )
}

