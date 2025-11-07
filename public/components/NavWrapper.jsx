import './navwrapper.css'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Content from './Content'

function NavWrapper() {
  return (
    <>
    <div className="navwrapper">
        <Sidebar />
        <div className="main">
          <Navbar />
          <Content />
        </div>
    </div>
    </>
  )
}

export default NavWrapper