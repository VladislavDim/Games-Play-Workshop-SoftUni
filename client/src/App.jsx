import './App.css'
import { Routes, Route } from 'react-router'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/Register/Register'
import GameCreate from './components/game-create/GameCreate'
import GameEdit from './components/game-edit/GameEdit'

function App() {

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/games/create' element={<GameCreate />} />
                    <Route path='/games/edit' element={<GameEdit />} />
                </Routes>
                <Home />
            </main>
        </div>
    )
}

export default App
