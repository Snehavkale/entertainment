import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Movie from './Pages/Movie/Movie'
import Tranding from './Pages/Tranding/Tranding'
import Series from './Pages/Series/Series'
import Search from './Pages/Search/Search'
import { Container } from '@mui/material'

function App() {


  return (
    <>
      <Router>
        <Header />
        <div className='app'>
          <Container>
            <Routes>
              <Route path='/' element={<Tranding />} />
              <Route path='/movie' element={<Movie />} />
              <Route path='/series' element={<Series />} />
              <Route path='/search' element={<Search />} />
            </Routes>

          </Container>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
