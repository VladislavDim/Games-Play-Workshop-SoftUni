import { Routes, Route } from 'react-router'
import { useState } from 'react'

import { UserContext } from './context/userContext'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Logout from './components/logout/Logout'
import Register from './components/Register/Register'
import GameCreate from './components/game-create/GameCreate'
import GameEdit from './components/game-edit/GameEdit'
import GameDetails from './components/game-details/GameDetails'
import GameCatalog from './components/game-catalog/GameCatalog'

import './App.css'

function App() {
    const [authData, setAuthData] = useState({});

    const userLoginHandler = (data) => {
        setAuthData(data);
    };

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler }}>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/games/create' element={<GameCreate />} />
                        <Route path='/games/:gameId/edit' element={<GameEdit />} />
                        <Route path='/games/:gameId/details' element={<GameDetails />} />
                        <Route path='/games/catalog' element={<GameCatalog />} />
                        <Route path='/logout' element={<Logout />} />
                    </Routes>
                    <Home />
                </main>
            </div>
        </UserContext.Provider>
    )
}

export default App
