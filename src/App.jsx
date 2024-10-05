import './App.css'
import { CounterComponent } from './components/Counter/CounterComponent'
import { HeaderComponent } from './components/Header/HeaderComponent'
import { FooterComponent } from './components/footer/FooterComponent'
function App() {

  return (
    <>
    <HeaderComponent/>
      <CounterComponent/>
    <FooterComponent/>
    </>
  )
}

export default App
