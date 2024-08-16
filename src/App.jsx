import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import Snowfall from 'react-snowfall' 

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='small min-h-screen flex flex-wrap content-between backdrop-blur-sm bg-slate-200 bg-opacity-20 shadow-[0px_20px_32px_0px_#2d3748] rounded-md'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
          <Snowfall color="white" snowflakeCount={200} />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
