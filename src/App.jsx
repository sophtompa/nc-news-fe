import './App.css'
import { Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Welcome from '../components/Welcome'
import Articles from '../components/Articles'
import Article from '../components/Article'
import Comments from '../components/Comments'

function App() {

  return (
    <>
    <Header/>
    <Nav/>
    <Routes>
    <Route path='/' element={ <Welcome/>}/>
    <Route path='/articles' element={<Articles/>}/>
    <Route path='/articles/:article_id' element={<><Article/><Comments/></>}/>
  
    </Routes>
    </>
  )
}

export default App
