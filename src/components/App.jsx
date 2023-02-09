import React,{ useState, useEffect} from "react"

import Editor from "./Editor"

export default function App() {

  const [html, setHtml] = useState(' ')
  const [css, setCss] = useState(' ')
  const [javascript, setJavascript] = useState(' ')
  const [srcDoc, setSrcDoc] = useState(' ')

  useEffect(() => {
    const timeout = setTimeout(()=>{
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javascript}</script>
      </html>
    `)
    }, 300)
    
    return () => clearTimeout(timeout);
  }, [html, css, javascript])

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
          srcDoc={srcDoc}
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

