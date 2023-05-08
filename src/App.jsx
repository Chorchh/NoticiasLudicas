import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/header/Header'
import Routes from './routes/Routes'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Routes/>
      <Footer/>
    </>
  )
}

export default App
