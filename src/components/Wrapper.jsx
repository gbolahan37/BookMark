import './wrapper.css'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Content from './Content'
import { useState } from 'react'

function Wrapper() {
  const barVisibility = useState(false)

  return (
    <>
    <div className="wrapper">
        <Sidebar sidebarVisibility={barVisibility} />
        <div className="main">
          <Navbar sidebarVisibility={barVisibility} />
          <Content />
        </div>
    </div>
    </>
  )
}

export default Wrapper