import { Link } from "react-router-dom";
import '../../App.css'


const Home = ({ members }) => {
    
    return (
        <div className='links'>
            
            {members.map(element =>
            
                element.type === 'pf' ? (
                    <Link to={`/costumer/${element.id}`} key={element.id}>
                        {element.name}
                    </Link>
                    ) : (
                    <Link to={`/company/${element.id}`} key={element.id}>
                        {element.name}
                    </Link>
                )
            )}
        </div>
    )
}

export default Home