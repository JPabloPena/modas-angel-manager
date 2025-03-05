import { NavLink } from 'react-router'
import Home from '../icons/Home'
import LogOut from '../icons/LogOut'

const LINKS = [
  {
    icon: (className) => <Home className={className} />,
    name: 'Inicio',
    to: '/'
  },
  {
    icon: (className) => <Home className={className} />,
    name: 'Clientes',
    to: '/clientes'
  },
  {
    icon: (className) => <Home className={className} />,
    name: 'Facturas',
    to: '/facturas'
  }
]

function Sidebar () {
  const activeStyle = 'bg-secondary-bg'

  return (
    <nav className='w-full max-w-72 h-dvh bg-primary-bg px-5 pt-24 pb-12 flex flex-col justify-between'>
      <ul className='flex flex-col space-y-2'>
        {LINKS.map(({ icon, name, to }) =>
          (
            <li key={name} className='rounded-md overflow-hidden hover:bg-secondary-bg transition-all'>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex gap-3 text-sm px-4 py-3 items-center ${isActive ? activeStyle : undefined}`}
              >
                {icon('size-4.5')}
                <span>{name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div className='rounded-md overflow-hidden hover:bg-secondary-bg transition-all hover:cursor-pointer'>
        <button className='flex gap-3 text-sm px-4 py-3 items-center w-full hover:cursor-pointer'>
          <LogOut className='size-4.5' />
          <span>Log out</span>
        </button>
      </div>
    </nav>
  )
}

export default Sidebar
