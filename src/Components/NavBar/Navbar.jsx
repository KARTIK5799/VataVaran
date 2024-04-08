import style from './Navbar.module.css'
import logo from '../../assets/logo.png'
import { useTheme } from '../../theme-context'

const Navbar = () => {
  const {theme,toggleTheme,setIsDarkMode} = useTheme()
  
 
  return (
    <div className={style.navbarSection}>
      <nav className={style.navbar}>
      <div className={style.logoSection}>
      <img src={logo} alt="" className={style.logo} />
      <p className={style.logotitle}>Vata<span>Varan</span></p>
      </div>
      <div className={style.themeSection}>
        <input type="checkbox" name="" id="darkmode-toggle" className={style.toggleInput} onChange={toggleTheme}   />
        <label htmlFor="darkmode-toggle" className={style.themeToggle}></label>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
