import React, { useState, useContext, useEffect, lazy } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/base16-light.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/addon/display/fullscreen.js";
// import "codemirror/addon/display/fullscreen.css";
import editorStyles from "./Editor.module.css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { themeContext } from "../../contexts/ThemeContext";

// const FullscreenCss = lazy(() => {
//   import("codemirror/addon/display/fullscreen.css");
// });
const FullscreenCss = import("codemirror/addon/display/fullscreen.css");

export default function Editor({
  displayName,
  language,
  value,
  onChange,
  setWelcomeText,
  editorPosition,
}) {
  const [open, setOpen] = useState(true);

  const darkTheme = useContext(themeContext);

  function handleChange(editor, data, value) {
    setWelcomeText(false);
    onChange(value);
  }

  const editorConditionalStyles = {
    top: {
      editorContainer: { width: "calc(100% / 3)", height: "" },
    },
    left: {
      editorContainer: { width: "100%", height: "calc(90% / 3)" },
    },
    right: {
      editorContainer: { width: "100%", height: "calc(90% / 3)" },
    },
  };

  useEffect(() => {
    async function RunFullscreenCss() {
      await FullscreenCss;
    }

    RunFullscreenCss();
  });

  return (
    <div
      className={`editor-container ${open ? "" : "collapsed"} ${
        editorPosition !== "top" && !open ? editorStyles["collapse"] : ""
      }`}
      style={{
        backgroundColor: darkTheme ? "hsl(225, 6%, 25%)" : "hsl(0deg 3% 73%)",
        color: darkTheme ? "white" : "hsl(225, 6%, 25%)",
        ...editorConditionalStyles[editorPosition].editorContainer,
      }}
    >
      <div className="editor-title">
        {displayName}
        <button
          className={editorStyles["expand-collapse-button"]}
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          styleActiveLine: true,
          theme: darkTheme ? "material" : "base16-light",
          extraKeys: {
            F11: function (cm) {
              // FullscreenCss();
              cm.setOption("fullScreen", !cm.getOption("fullScreen"));
            },
            Esc: function (cm) {
              if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
            },
          },
        }}
      />
    </div>
  );
}
