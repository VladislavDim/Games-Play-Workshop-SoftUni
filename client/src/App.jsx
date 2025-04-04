import { Routes, Route } from 'react-router'
import { useState } from 'react'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/Register/Register'
import GameCreate from './components/game-create/GameCreate'
import GameEdit from './components/game-edit/GameEdit'
import GameDetails from './components/game-details/GameDetails'
import GameCatalog from './components/game-catalog/GameCatalog'

import './App.css'

function App() {
    const [email, setEmail] = useState('');

    const userLoginHandler = (authData) => {
        setEmail(authData.email);
    };

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login onLogin={userLoginHandler} />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/games/create' element={<GameCreate />} />
                    <Route path='/games/:gameId/edit' element={<GameEdit />} />
                    <Route path='/games/:gameId/details' element={<GameDetails />} />
                    <Route path='/games/catalog' element={<GameCatalog />} />
                </Routes>
                <Home />
            </main>
        </div>
    )
}

export default App
