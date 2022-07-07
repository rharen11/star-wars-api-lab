const baseUrl="https://swapi.dev/api/"

export async function getStarshipList(){
    const res = await fetch (`${baseUrl}starships/`)
    return res.json()
}