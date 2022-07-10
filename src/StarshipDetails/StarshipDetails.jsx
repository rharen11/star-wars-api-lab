import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { getDetails } from '../services/sw-api'

const StarshipDetails = () => {
    const [starshipDetails, setStarshipDetails] = useState({})
    const location = useLocation()

    useEffect(() => {
        const fetchDetails = async () => {
            const starshipData = await getDetails(location.state.starship.url)
            setStarshipDetails(starshipData)
        }
        fetchDetails()
    }, [location.state.starship.url])

    return (
        <>
            <h1 className="starship-details-title">Starship Details</h1>
            {starshipDetails.name ?
        <>  
            <h2 className="starship-details">{starshipDetails.name}
            </h2> 
            <h3 className="starship-details">{starshipDetails.model}
            </h3>
            <Link className="starship-details-return"  to="/">Return</Link>
        </>
        :
        <>
            <h3 className="starship-details-title">Loading Starships
            </h3>
        </>
         }
         </>
    )
}

export default StarshipDetails