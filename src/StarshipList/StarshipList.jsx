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
           <h3>Starships</h3>
           {starshipList.length ?
            <>
            {starshipList.map(starship =>
                <button key={starship.name}>
                    <Link className="starshiplist" to="/starship" state={{starship}}>{starship.name}</Link>
                    <br />
                </button>
                )} 
            </>
            :
            <>
            <h4>Loading Starhips!</h4>
            </>  
        }
        </>
    );
}

export default StarshipList