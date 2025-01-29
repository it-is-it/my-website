import './OtherProjects.css'
import { data } from '../data'
import { Link } from 'react-router-dom'
const OtherProjects = () => {
  return (
<div className='OtherProjects space' id='Projects'>
            {/* <h5>Other projects</h5> */}
            <h2>Other projects</h2>
            <div className="container portfolio-container">
                {
                    data.map((element , index)=>{return(
                        <div className='circle' key={index}>
                            <Link to={`/Portfolio/${element.id}`} >
                            <img src={element.Image} alt="" />
                            </Link>
                        
                    </div>
                    )})
                }

            </div>
        </div>
  )
}

export default OtherProjects
