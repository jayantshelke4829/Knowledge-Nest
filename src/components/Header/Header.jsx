import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
 
  
  

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,   
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='flex py-3 shadow smx'>
      <Container>
        <nav className='flex '>
          <div className='mr-4'>
            <Link to='/'>
              <Logo    />

              </Link>
          </div>
          <ul className='flex ml-auto
           ' 
           style={{}} >
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='px-6 py-2  rounded-full font-dm   
                bg-black hover:font-extrabold text-transparent  bg-clip-text  hover:bg-gradient-to-r  from-blue-600 to-green-400 hover:shadow-xl hover:shadow-blue-600/75 
                '
                // 'inline-bock px-6 py-2   rounded-full font-dm hover:text-blue-600 hover:shadow-xl hover:shadow-blue-600/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]

                
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header