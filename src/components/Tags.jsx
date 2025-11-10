import './tag.css'

const Tag = ({tagname}) =>{
    return(
        <div className="tag-group">
            <input type="checkbox" className='checky' />
            <label htmlFor="">{tagname}</label>
        </div>
    )
}

function Tags() {
  return (
    <div className="tag">
        <h4>Tags</h4>
        <div className="tag-list">
            <Tag tagname="AI" />
            <Tag tagname="Community" />
            <Tag tagname="Compatibility" />
            <Tag tagname="Design" />
            <Tag tagname="Framework" />
            <Tag tagname="Git" />
            <Tag tagname="HTML" />
            <Tag tagname="Javascript" />
            <Tag tagname="Layout" />
            <Tag tagname="Learning" />
            <Tag tagname="Performance" />
        </div>   
    </div>
  )
}

export default Tags