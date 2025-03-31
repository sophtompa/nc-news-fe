import './App.css'
import { Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Welcome from '../components/Welcome'
import Articles from '../components/Articles'

function App() {

  return (
    <>
    <Header/>
    <Nav/>
    <Routes>
    <Route path='/' element={ <Welcome/>}/>
    <Route path='/articles' element={<Articles/>}/>
    </Routes>
    </>
  )
}

export default App
