import './sidebar.css'
import Tags from './Tags'

const Links = ({ label, icon}) => {
    return(
        <div className="link-group">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d={icon}></path></svg>
            <li><a href="">{label}</a></li>
        </div>
    )
}
function Sidebar({ sidebarVisibility }) {

    const [visible, setVisible] = sidebarVisibility

    function closeClick (){
        console.log("Hurry")
        setVisible(false)
    }

  return (
    visible && <div className="sidebar">
        <div className="close-btn" onClick={closeClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
        </div>
        <div className="logo">
            <div className="logo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FFFFFF" viewBox="0 0 256 256"><path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"></path></svg>
            </div>
            <h2 className='logo-name'>Bookmark Manager</h2>
        </div>
        <ul className='nav-links'>
            <Links label= 'Home' icon='M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z' />
            <Links label= 'Archived' icon='M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z' />
        </ul>
        <Tags />
    </div>
  )
}

export default Sidebar
