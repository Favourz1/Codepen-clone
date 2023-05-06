import React, { useContext, useRef, useEffect } from 'react'
import { attachToElement, setUserContext } from 'codemirror-console-ui'
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror-console/dest/mirror-console';
import 'codemirror/mode/javascript/javascript';
import 'codemirror-console';
import { MirrorConsole } from 'codemirror-console'
// import Terminal from 'react-console-emulator';


import { themeContext } from '../../contexts/ThemeContext'

// const commands = {
//     echo: {
//         description: 'Echo a passed string.',
//         usage: 'echo <string>',
//         fn: function () {
//             return `${Array.from(arguments).join(' ')}`
//         }
//     }
// }


const Console = ({ javascript }) => {
    const darkTheme = useContext(themeContext);
    const consoleRef = useRef(null)
    let isConsoleInitialized = useRef(false)


    // useEffect(() => {
    //     // Initialize CodeMirror with options
    //     const codeMirrorInstance = CodeMirror.fromTextArea(consoleRef.current, {
    //         mode: 'javascript',
    //         theme: 'default',
    //         lineNumbers: true,
    //         tabSize: 2,
    //         autofocus: true,
    //         console: {
    //             prompt: '>> ',
    //             welcomeMessage: 'Welcome to CodeMirror Console!',
    //         },
    //     });

    //     // Add CodeMirror-Console extension
    //     codeMirrorInstance.console = CodeMirrorConsole.create(codeMirrorInstance);

    //     // Add event listener for input
    //     codeMirrorInstance.console.on('input', (input) => {
    //         console.log('Input:', input);
    //     });
    // }, []);

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

        // document.querySelector('.mirror-console-button.mirror-console-run').onclick = function (el) {
        //     !isConsoleInitialized
        //     console.log("i ran on the console")
        //     attachToElement(consoleRef, javascript, {
        //         state: 'open',
        //         scrollIntoView: false,
        //     });

        //     // isConsoleInitialized = true;
        // }


        // runConsole()

        return () => {
            // document.querySelector(".mirror-console-wrapper").innerHTML = ""
            // !isConsoleInitialized.current
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
            {/* <Terminal
                commands={commands}
                welcomeMessage={'Welcome to the React terminal!'}
                promptLabel={'me@React:~$'}
            /> */}

        </div>

    )
}

export default Console