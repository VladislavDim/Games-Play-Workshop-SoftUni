import './App.css'
import { Routes, Route } from 'react-router'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'

function App() {

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                <Home />
            </main>
        </div>
    )
}

export default App
