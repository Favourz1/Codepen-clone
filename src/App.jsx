import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Editor from "./components/Editor/Editor";
import Console from "./components/Console/Console";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header/Header";
import ThemeContext from "./contexts/ThemeContext";

export default function App() {
  const [html, setHtml] = useLocalStorage("html", " ");
  const [css, setCss] = useLocalStorage("css", " ");
  const [javascript, setJavascript] = useLocalStorage("javscript", " ");
  const [srcDoc, setSrcDoc] = useState(" ");
  const [isWelcomeTextActive, setIsWelcomeTextActive] = useState(true);
  const [editorPosition, setEditorPosition] = useState('top');
  const [abstractDarkTheme, setAbstractDarkTheme] = useState()

  useEffect(() => {
    const timeout = setTimeout(() => {
      isWelcomeTextActive
        ? setSrcDoc(` <html><body> 
      <div class="welcome-text">Hello there, Welcome to Favour Okoh's Codepen.<br>Start typing to see your results here 😀</div>
      <style>.welcome-text{
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        height: 200px;
        text-align:center;        
      }
      </style>
      </body> </html>`)
        : setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
        `);
    }, 300);


    return () => clearTimeout(timeout);
  }, [html, css, javascript]);


  const appConditionalStyles = {
    "top": {
      paneContainer: { flexDirection: "column" },
      topPane: { flexDirection: "row" }
    },
    "left": {
      paneContainer: { flexDirection: "row" },
      topPane: { flexDirection: "column" }
    },
    "right": {
      paneContainer: { flexDirection: "row-reverse" },
      topPane: { flexDirection: "column" }
    }
  }

  return (
    <ThemeContext>
      <div className={`app ${abstractDarkTheme ? "dark" : "light"}`}>
        <Header editorPosition={editorPosition} changeEditorPosition={setEditorPosition} changeAbstractDarkTheme={setAbstractDarkTheme} />
        <div className="pane-container" style={appConditionalStyles[editorPosition].paneContainer}>
          <div className="pane top-pane" style={{ width: editorPosition === "top" ? "100%" : "50%", height: editorPosition === "top" ? "50%" : "100%", padding: editorPosition === "top" && 0, backgroundColor: abstractDarkTheme ? 'hsl(225, 6%, 25%)' : 'hsl(0deg 3% 73%)', ...appConditionalStyles[editorPosition].topPane }}>
            <Editor
              displayName="HTML"
              language="xml"
              value={html}
              onChange={setHtml}
              setWelcomeText={setIsWelcomeTextActive}
              editorPosition={editorPosition}
            />
            <Editor
              displayName="CSS"
              language="css"
              value={css}
              onChange={setCss}
              setWelcomeText={setIsWelcomeTextActive}
              editorPosition={editorPosition}
            />
            <Editor
              displayName="Javascript"
              language="javascript"
              value={javascript}
              onChange={setJavascript}
              setWelcomeText={setIsWelcomeTextActive}
              editorPosition={editorPosition}
            />
          </div>
          <div className="pane bottom-pane" style={{ width: editorPosition === "top" ? "100%" : "50%", height: editorPosition === "top" ? "50%" : "100%" }}>
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

        <Console
          javascript={javascript}
        />
      </div>
    </ThemeContext>
  );
}
