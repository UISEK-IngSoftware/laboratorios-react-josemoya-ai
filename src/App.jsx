import { Container } from '@mui/material'
import Header from './components/Header'
import PokemonList from './pages/PokemonList'
import TrainerList from './pages/TrainerList'
import PokemonForm from './pages/PokemonForm'
import TrainerForm from './pages/TrainerForm'
import LoginPage from './pages/LoginPage'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<PokemonList />} />
            <Route path='/trainers' element={<TrainerList />} />
            <Route path='/add-pokemon' element={<PokemonForm />} />
            <Route path='/add-trainer' element={<TrainerForm />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App
