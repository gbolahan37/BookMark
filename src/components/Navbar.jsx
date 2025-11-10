import './navbar.css'

const Button = () => {
  return(
    <button className='nav-btn'>+ <span>Add Bookmark</span></button>
  )
}

function Navbar() {
  return (
    <>
    <div className="navbar">
      <div className="ham">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
      </div>
      <div className="search-bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
        <input type="search" className='search-input' placeholder='Search by title....' />
      </div>
      <div className="left-nav">
      <Button />
      <img className='profile' src="/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.avif" alt="" />
      </div>
    </div>
    </>
  )
}

export default Navbar