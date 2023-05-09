import React, { useContext, useRef, useEffect } from 'react'
import { attachToElement, setUserContext } from 'codemirror-console-ui'
import 'codemirror/lib/codemirror.css';
import 'codemirror-console/dest/mirror-console';
import 'codemirror/mode/javascript/javascript';
import 'codemirror-console';


import { themeContext } from '../../contexts/ThemeContext'

const Console = ({ javascript }) => {
    const darkTheme = useContext(themeContext);
    const consoleRef = useRef(null)
    let isConsoleInitialized = useRef(false)


    useEffect(() => {
        function runConsole() {
            setUserContext({ javascript })
            attachToElement(consoleRef.current, javascript, {
                state: 'closed',
                scrollIntoView: false,
            });
        }

        if (!isConsoleInitialized.current) {
            console.log("Value of console initialized before render is " + isConsoleInitialized.current)
            runConsole()
            isConsoleInitialized.current = true;
            console.log("Value of console initialized after render is " + isConsoleInitialized.current)
        }

        document.querySelector('.mirror-console-button.mirror-console-run').textContent = "Run Console"


        // runConsole()

        return () => {
        };
    });

    return (
        <div className="console-wrapper" style={{
            backgroundColor: darkTheme ? 'hsl(225, 6%, 25%)' : 'hsl(0deg 3% 73%)',
            color: darkTheme ? 'white' : 'hsl(225, 6%, 25%)',
            display: 'none'
        }}
            ref={consoleRef}
        >
        </div>

    )
}

export default Console