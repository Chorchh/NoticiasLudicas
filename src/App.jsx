import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/header/Header'
import Routes from './routes/Routes'

function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Routes/>
    </>
  )
}

export default App
