import './sidebar.css'
import Tags from './Tags'

const Links = ({ label}) => {
    return(

            <div className="link-group">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path></svg>
                <li><a href="">{label}</a></li>
            </div>

    )
}
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="logo">
            <div className="logo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FFFFFF" viewBox="0 0 256 256"><path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"></path></svg>
            </div>
            <h2 className='logo-name'>Bookmark Manager</h2>
        </div>
        <ul className='nav-links'>
            <Links label= 'Home' />
            <Links label= 'Archived' />
        </ul>
        <Tags />
    </div>
  )
}

export default Sidebar