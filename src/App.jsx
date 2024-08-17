import './index.css'

import Header from './components/header/Header'
import Keyboard from './components/keyboard/Keyboard'
import Screen from './components/screen/Screen'

import { ThemeContextProvider } from './context/ThemeContext'
import ThemeProvider from './providers/ThemeProvider'


function App() {

  return (
    <ThemeContextProvider>
      <ThemeProvider>

        <div className='container'>
          <div className='calculator'>

            <Header />
            <div>
              <Screen />
              <Keyboard />
            </div>

          </div>
        </div>
      </ThemeProvider>
    </ThemeContextProvider>
  )
}

export default App
