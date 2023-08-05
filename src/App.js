import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';
import PlayerProfile from './components/PlayerProfile/PlayerProfile';
import AllLegends from './components/AllLegends/AllLegends';
import Layout from './components/Layout/Layout';
import Error from './components/Error/Error';
import News from './components/News/News';
import LegendProfile from './components/LegendProfile/LegendProfile';

function App() {

  const [platform, setPlatform] = useState('');
  const [player, setPlayer] = useState('');
  const [playerData, setPlayerData] = useState({});
  const [error, setError] = useState(0);
  const [news, setNews] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
  if (error) {
    navigate("*")
  } else if (!player && !platform) {
    navigate("/")
  }
}, [player, platform])


  function getPlayerData() {
    fetch(`https://api.mozambiquehe.re/bridge?auth=bae15f3f336782882976819cd65d9ef3&player=${player}&platform=${platform}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        setError(res.status);
        throw new Error(`Error ${res.status}`);
      }
    })
    .then(data => setPlayerData(data))
    .catch(error => console.log(error));
  }

  useEffect(() => {
    fetch('https://api.mozambiquehe.re/news?auth=bae15f3f336782882976819cd65d9ef3')
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        setError(res.status);
        throw new Error(`Error ${res.status}`);
      }
    })
    .then(data => setNews(data))
    .catch(error => console.log(error));
  }, [])

  return (
    <div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form player={player} setPlayer={setPlayer} setPlatform={setPlatform} getPlayerData={getPlayerData} platform={platform}/>} />
          {playerData.global && 
          <Route path="/:player" element={<Layout setPlatform={setPlatform} setPlayer={setPlayer} setPlayerData={setPlayerData} player={player}/>}>
            <Route index end element={<PlayerProfile playerData={playerData} />} />
            <Route path="legends" element={<AllLegends playerData={playerData} player={player} />} />
            <Route path="news" element={<News news={news} />} />
            <Route path={`:name`} element={<LegendProfile playerData={playerData} />} />
          </Route>
          }
          <Route path="*" element={<Error error={error} setPlatform={setPlatform} setPlayer={setPlayer} setPlayerData={setPlayerData} setError={setError}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
