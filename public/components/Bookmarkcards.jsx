import './bookmarkcards.css'




const Cards = ({title, link, para , label, type, Comm, views, time, date, imgSrc, MDm}) =>{
    return(
        <div className="card">
            <div className="card-header">
                <div className="title">
                    <img src={imgSrc} alt="" className='card-image' />
                    <div className="title-text">
                        <h3>{title}</h3>
                        <p>{link}</p>
                    </div>
                </div>
                <div className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z"></path></svg>
                </div>
            </div>
            <div className="paragraph">
                <p>{para}</p>
            </div>
            <div className="lang-type">
                <div className="lang">{label}</div>
                <div className="lang">{type}</div>
                <div className="lang">{Comm}</div>
                <div className="lang">{MDm}</div>
            </div>
            <div className='card-footer'>
                <div className="details">
                    <div className="foot-group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path></svg>
                        <span>{views}</span>
                    </div>
                    <div className="foot-group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path></svg>
                        <span>{time}</span>
                    </div>
                    <div className="foot-group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path></svg>
                        <span>{date}</span>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M216,168h-9.29L185.54,48H192a8,8,0,0,0,0-16H64a8,8,0,0,0,0,16h6.46L49.29,168H40a8,8,0,0,0,0,16h80v56a8,8,0,0,0,16,0V184h80a8,8,0,0,0,0-16ZM86.71,48h82.58l21.17,120H65.54Z"></path></svg>
            </div>
        </div>
    )
}

function Bookmarkcards() {
  return (
    <div className="bookmarkcards">
        <Cards imgSrc="/mentor.png" title = "Frontend Mentor" para="Improve front-end coding skills by building real projects. Solve real-world HTML, CSS and javaScript challenges whilst working tp professional designs." 
        link="frontend.io" label= 'Practices' type="Learning" Comm="Community" views="47" time="25 Sep" date="15 Jan" />
        
        <Cards imgSrc="/Screenshot 2025-11-07 163755.png" title="MDN Web Docs" para="The MDN Web Docs site provides information about Open web tecnologies including HTML, CSS and APIs for both Web sites and progressive web apps." 
        link="developer.mozila.org" label= 'Reference' type="HTML" Comm="CSS" MDm="javaScript" views="157" time="24 Sep" date="10 Jan" />
        
        <Cards imgSrc="/react.png" title="React" para="The libery for web and native user interfaces. Build user interfaces out of individual pieces called conponents." 
        link="react.dev" label= 'JavaScript' type="Framework" Comm="Reference" views="0" time="Never" date="20 Feb" />
        
        <Cards imgSrc="/claude.png" title="Claude" para="An AI assistance created by anthropicthat can help with analysis, writing, coding , math and creative tasks through natural conversation." 
        link="claude.ai" label= 'Tools' type="Al" Comm="Learning" views="75" time="23 Sep" date="18 Feb" />
        
        <Cards imgSrc="/web.dev.png" title="Web.dev" para="Guidance to build web experiences that works on any broswer. learn about web vitals, PWAs, and more." 
        link="web.dev" label= 'Performance' type="Learning" Comm="tips" views="15" time="16 Aug" date="15 Feb" />
        
        <Cards imgSrc="/tailwind.png" title="Tailwind CSS" para="A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML." 
        label= 'CSS' type="Framework" Comm="Tools" views="52" time="19 Sep" date="12 Feb" />
    </div>
  )
}

export default Bookmarkcards