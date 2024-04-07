import style from './Navbar.module.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className={style.navbarSection}>
      <nav className={style.navbar}>
      <div className={style.logoSection}>
      <img src={logo} alt="" className={style.logo} />
      <p className={style.logotitle}>VataVaran</p>
      </div>
      <div className={style.themeSection}>
        <input type="checkbox" name="" id="darkmode-toggle" className={style.toggleInput} />
        <label htmlFor="darkmode-toggle" className={style.themeToggle}></label>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
