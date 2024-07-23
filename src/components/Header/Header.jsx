import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
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
    <header className='flex py-3 shadow '>
    <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <Container>
        <nav className='flex '>
          <div className='mr-4'>
            <Link to='/'>
              <Logo />

            </Link>
          </div>
          <div className="dropdown ms-auto flex ">
            <button className="dropbtn " ><i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="dropdown-content rounded-md pl-4 pr-3 opacity-60">
              <ul className='smx
           '
              >
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
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header