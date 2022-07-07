import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { getStarshipList } from '../services/sw-api'

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
                <div key={starship.name}>
                    <Link to="/starship" state={{starship}}>{starship.name}</Link>
                    <br />
                </div>
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