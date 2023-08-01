import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, } from 'react-router-dom';
import Form from './components/Form/Form';
import PlayerProfile from './components/PlayerProfile/PlayerProfile';
import AllLegends from './components/AllLegends/AllLegends';
import Layout from './components/Layout/Layout';

function App() {

  const [platform, setPlatform] = useState('');
  const [player, setPlayer] = useState('');
  const [playerData, setPlayerData] = useState(false);

  console.log(player)
  console.log(platform)
  console.log(playerData)
  function getPlayerData() {
    fetch(`https://api.mozambiquehe.re/bridge?auth=bae15f3f336782882976819cd65d9ef3&player=${player}&platform=${platform}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`Error ${res.statusText}`);
      }
    })
    .then(data => setPlayerData(data))
    .catch(err => console.log(err));
  }

  return (
    <div>
      {/* <header className="app-header">
        <h1>Wingman</h1>
      </header> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Form player={player} setPlayer={setPlayer} setPlatform={setPlatform} getPlayerData={getPlayerData} />} />
          {playerData && <Route path="/:player" element={<Layout playerData={playerData} />}>
            <Route index end element={<PlayerProfile playerData={playerData} />} />
            <Route path="legends" element={<AllLegends playerData={playerData} />} />
          </Route>}
          {/* <Route path="*" element={<h1>404</h1>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
