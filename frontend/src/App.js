import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/product/:id' element={<ProductPage />}/>
          </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
