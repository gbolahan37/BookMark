import Contentheader from "./contentheader"
import Bookmarkcards from "./Bookmarkcards"
import './content.css'

function Content() {
  return (
    <div className="content">
        <Contentheader />
        <Bookmarkcards />
    </div>
  )
}

export default Content