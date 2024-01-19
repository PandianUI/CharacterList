import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/Characterlist/Characterlist';
import CharacterDetails from './components/Characterlist/CharacterDetails';


function App(){

  const[data, SetData] = useState([])

  useEffect(() => {
    const fetchInfo = async () => {
      const newdata = await fetch('https://mocki.io/v1/aff8652e-63be-4beb-8223-f2d281a01245');
      const displaydata = await newdata.json();
      SetData(displaydata)
      console.log(displaydata)
    }
    fetchInfo();
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={ <CharacterList data={data} /> } />
        <Route path="/character/:id" element={ <CharacterDetails data={data} /> } />
      </Routes>
    </Router>
  );
};

export default App;
