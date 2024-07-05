import style from './Navbar.module.css'
import logo from '../../assets/logo.png';
import { useTheme } from '../../theme-context';
import { AppBar, Toolbar, Typography, Box, styled } from '@mui/material';

const LogoSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Logo = styled('img')({
  height: '50px', 
  marginRight: '10px',
});

const Logotitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  '& span': {
    color: '#1976d2',
  },
});

const ThemeSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppBar position="static" color="default" style={{ backgroundColor: theme === 'dark' ? 'rgb(30,60,80)' : '#fff', height: '80px' }}> 
      <Toolbar style={{ minHeight: '80px' }}> 
        <LogoSection>
          <Logo src={logo} alt="logo" />
          <Logotitle variant="h6" style={{ color: theme === 'dark' ?  '#fff' :'#102837' }}>Vata<span>Varan</span></Logotitle>
        </LogoSection>
        <Box sx={{ flexGrow: 1 }} />
        <ThemeSection>
          <div className={style.themeSection}>
            <input type="checkbox" name="" id="darkmode-toggle" className={style.toggleInput} onChange={toggleTheme} />
            <label htmlFor="darkmode-toggle" className={style.themeToggle}></label>
          </div>
        </ThemeSection>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
