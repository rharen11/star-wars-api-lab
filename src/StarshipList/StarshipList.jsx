import { useEffect, useState } from "react";
import { getStarshipList } from '../services/sw-api'
import { Link } from "react-router-dom"; 

const StarshipList = () => {
    const [starshipList, setStarshipList] = useState([])

    useEffect (() => {
        const fetchStarshipList = async () => {
            const starshipData = await getStarshipList()
            console.log(starshipData)
            setStarshipList(starshipData.results)
        }
        fetchStarshipList()
    },[])

    return(
        <>
           <h1 className="starship-list">Starships</h1>
           {starshipList.length ?
            <>
            {starshipList.map(starship =>
                <div className="card-container">
                <div className="starshipList" key={starship.name}>
                    <Link className="starshiplist" to="/starship" state={{starship}}>{starship.name}</Link>
                    <br />
                </div>
                </div>
                )} 
            </>
            :
            <>
            <h4 className="starship-list">Loading Starhips!</h4>
            </>  
        }
        </>
    );
}

export default StarshipList