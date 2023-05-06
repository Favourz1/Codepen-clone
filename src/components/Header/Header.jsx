import React, { useContext, useState, useEffect } from "react";
import HeaderStyles from "./Header.module.css"
import { themeContext, setThemeContext } from "../../contexts/ThemeContext"
import FavourzLogoWhite from "../../assets/img/favourz-logo-white.png"
import FavourzLogoBlack from "../../assets/img/favourz-logo-black.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import EditorTop from "../Icons/EditorTop";
import EditorLeft from "../Icons/EditorLeft";
import EditorRight from "../Icons/EditorRight";
import EditorModal from "../EditorModal/EditorModal";
import PropTypes from 'prop-types'


const Header = ({ editorPosition = "top", changeEditorPosition, changeAbstractDarkTheme }) => {

  const [isEditorModalActive, setIsEditorModalActive] = useState(false)

  const darkThemeContext = useContext(themeContext)
  const setDarkThemeContext = useContext(setThemeContext)

  const setEditorIcon = {
    "top": () => <EditorTop dark={darkThemeContext} />,
    "left": () => <EditorLeft dark={darkThemeContext} />,
    "right": () => <EditorRight dark={darkThemeContext} />
  }

  const headerConditionalStyle = {
    backgroundColor: darkThemeContext ? 'hsl(225, 6%, 25%)' : 'white',
    color: darkThemeContext ? 'white' : 'hsl(225, 6%, 25%)',
    fill: darkThemeContext ? 'white' : 'hsl(225, 6%, 25%)'
  }

  useEffect(() => {
    changeAbstractDarkTheme(darkThemeContext)
  }, [darkThemeContext])
  return (
    <header className={HeaderStyles.header} style={headerConditionalStyle} >
      <div className={`${HeaderStyles["logo-wrapper"]}`}>
        <img src={darkThemeContext ? FavourzLogoWhite : FavourzLogoBlack} alt="Favour Okoh Logo" />
      </div>
      <div className={HeaderStyles["header-action-wrapper"]}>
        <div className={`${HeaderStyles["header-action-btn"]} ${HeaderStyles["theme-btn"]}`}
          onClick={() => setDarkThemeContext(prevTheme => !prevTheme)}
          tabIndex={0}
        > <FontAwesomeIcon icon={darkThemeContext ? faSun : faMoon} transform="right-4" /></div>
        <div className={`${HeaderStyles["header-action-btn"]} ${HeaderStyles[""]}`} onClick={() => setIsEditorModalActive(!isEditorModalActive)}>
          {setEditorIcon[editorPosition]()}
          {isEditorModalActive && <EditorModal editorPosition={editorPosition} changeEditorPosition={changeEditorPosition} onblur={() => setIsEditorModalActive(false)} />}
        </div>
      </div>
    </header>
  );


};

Header.propTypes = {
  editorPosition: PropTypes.string.isRequired,
  changeEditorPosition: PropTypes.func
}

Header.defaultProps = {
  editorPosition: "top"
}

export default Header;
