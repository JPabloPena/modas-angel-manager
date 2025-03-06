import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Layout ({ children }) {
  return (
    <div className='flex w-full h-dvh p-2 bg-primary-bg'>
      <Sidebar />
      <div className='w-full '>
        <Topbar />
        {children}
      </div>
    </div>
  )
}

export default Layout
