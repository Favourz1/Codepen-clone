import React, { useContext } from 'react'
import EditorLeft from '../Icons/EditorLeft'
import EditorTop from '../Icons/EditorTop'
import EditorRight from '../Icons/EditorRight'
import { themeContext } from '../../contexts/ThemeContext'

const EditorModal = ({ onblur }) => {
    const darkThemeContext = useContext(themeContext);
    return (
        <div
            className='editor-position__modal-container'
            // onBlur={onblur}
            // onMouseOut={onblur}
            // onClick={(el) => { el.target !== el ? onblur : undefined }}
            //useRef here 👆
            style={{
                backgroundColor: darkThemeContext ? 'hsl(225, 6%, 25%)' : 'white',
                color: darkThemeContext ? 'white' : 'hsl(225, 6%, 25%)',
            }}
        >
            <div className='editor-position__modal-wrapper'>
                <h3 className='editor-position__title'>Change View</h3>
                <ul className='editor-position__action-wrapper'>
                    <li><EditorLeft dark={darkThemeContext} /></li>
                    <li><EditorTop dark={darkThemeContext} /></li>
                    <li><EditorRight dark={darkThemeContext} /></li>
                </ul>

            </div>
        </div>
    )

}

export default EditorModal