import './wrapper.css'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Content from './Content'

function Wrapper() {
  return (
    <>
    <div className="wrapper">
        <Sidebar />
        <div className="main">
          <Navbar />
          <Content />
        </div>
    </div>
    </>
  )
}

export default Wrapper