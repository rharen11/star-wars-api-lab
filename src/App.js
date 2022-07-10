import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import StarshipList from './StarshipList/StarshipList'
import StarshipDetails from './StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={<StarshipList />} />
        <Route path="/starship" element={<StarshipDetails />} />
     </Routes>
    </>
  );
}

export default App;
