import React, { useContext } from "react";
import HeaderStyles from "./Header.module.css"
import { themeContext, setThemeContext } from "../../contexts/ThemeContext"
import FavourzLogoWhite from "../../assets/img/favourz-logo-white.png"
import FavourzLogoBlack from "../../assets/img/favourz-logo-black.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import EditorTop from "../Icons/EditorTop";


const Header = () => {

  const darkThemeContext = useContext(themeContext)
  const setDarkThemeContext = useContext(setThemeContext)

  const headerConditionalStyle = {
    backgroundColor: darkThemeContext ? 'hsl(225, 6%, 25%)' : 'white',
    color: darkThemeContext ? 'white' : 'hsl(225, 6%, 25%)',
    fill: darkThemeContext ? 'white' : 'hsl(225, 6%, 25%)'
  }

  return (
    <header className={HeaderStyles.header} style={headerConditionalStyle} >
      <div className={`${HeaderStyles["logo-wrapper"]}`}>
        <img src={darkThemeContext ? FavourzLogoWhite : FavourzLogoBlack} alt="Favour Okoh Logo" />
      </div>
      <div className={HeaderStyles["header-action-wrapper"]}>
        <div className={`${HeaderStyles["header-action-btn"]} ${HeaderStyles["theme-btn"]}`}
          onClick={() => setDarkThemeContext(prevTheme => !prevTheme)}
          tabIndex={0}
        > <FontAwesomeIcon icon={darkThemeContext ? faSun : faMoon} transform="right-4" size="1x" /></div>
        <div className={`${HeaderStyles["header-action-btn"]} ${HeaderStyles[""]}`}
        >
          <EditorTop dark={darkThemeContext} />
        </div>
      </div>
    </header>
  );


};



export default Header;
