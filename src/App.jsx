import './App.css'

import Navbar from './Components/NavBar/Navbar'
import SearchForm from './Components/SearchForm/SearchForm'
import WeatherView from './Components/WeatherView/WeatherView'
import { ThemeProvider } from './theme-context'

function App() {


  return (
    <ThemeProvider>
    <>
      <Navbar/>
      <SearchForm/>
    <WeatherView/>
    </>
    </ThemeProvider>
  )
}

export default App
