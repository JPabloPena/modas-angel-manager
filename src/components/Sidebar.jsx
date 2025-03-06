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
  const activeStyle = 'bg-primary'

  return (
    <nav className='w-full max-w-18 h-full rounded-xl linear-gradient-blue px-5 pt-24 pb-12 flex flex-col justify-between items-center'>
      <ul className='flex flex-col space-y-4 items-center'>
        {LINKS.map(({ icon, name, to }) =>
          (
            <li key={name} className='group w-12 h-12 rounded-md overflow-hidden hover:bg-primary transition-colors'>
              <NavLink
                to={to}
                className={({ isActive }) =>
                `w-full h-full flex justify-center items-center p-3 ${isActive ? activeStyle : ''}`}
              >
                {({ isActive }) => (
                  <>
                    {icon(`size-6 ${isActive ? 'fill-accent' : 'fill-tertiary'} group-hover:fill-accent`)}
                  </>
                )}
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div className='group w-12 h-12 rounded-md overflow-hidden hover:bg-primary transition-all hover:cursor-pointer hover:stroke-amber-300'>
        <button className='w-full h-full flex justify-center items-center p-3 hover:cursor-pointer'>
          <LogOut className='size-6 stroke-tertiary group-hover:stroke-accent' />
        </button>
      </div>
    </nav>
  )
}

export default Sidebar
