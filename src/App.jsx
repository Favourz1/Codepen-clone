import React, { useState, useEffect, useMemo } from "react";
import Editor from "./components/Editor/Editor";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header/Header";
import ThemeContext from "./contexts/ThemeContext";

export default function App() {
  const [html, setHtml] = useLocalStorage("html", " ");
  const [css, setCss] = useLocalStorage("css", " ");
  const [javascript, setJavascript] = useLocalStorage("javscript", " ");
  const [srcDoc, setSrcDoc] = useState(" ");
  const [isWelcomeTextActive, setIsWelcomeTextActive] = useState(true);

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

  return (
    <ThemeContext>
      <div className="app">
        <Header />
        <div className="pane-container">
          <div className="pane top-pane">
            <Editor
              displayName="HTML"
              language="xml"
              value={html}
              onChange={setHtml}
              setWelcomeText={setIsWelcomeTextActive}
            />
            <Editor
              displayName="CSS"
              language="css"
              value={css}
              onChange={setCss}
              setWelcomeText={setIsWelcomeTextActive}
            />
            <Editor
              displayName="Javascript"
              language="javascript"
              value={javascript}
              onChange={setJavascript}
              setWelcomeText={setIsWelcomeTextActive}
            />
          </div>
          <div className="pane bottom-pane">
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
      </div>
    </ThemeContext>
  );
}
