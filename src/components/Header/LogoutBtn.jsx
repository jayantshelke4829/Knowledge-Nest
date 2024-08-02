import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            window.location.reload();
        })
    }
  return (
    <button
    className=' 
    inline-bock px-6 py-2   rounded-full font-dm hover:text-red-600 hover:shadow-xl hover:shadow-red-600/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]
    '
    //'inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn