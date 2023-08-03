import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, } from 'react-router-dom';
import Form from './components/Form/Form';
import PlayerProfile from './components/PlayerProfile/PlayerProfile';
import AllLegends from './components/AllLegends/AllLegends';
import Layout from './components/Layout/Layout';
import Error from './components/Error/Error';
import News from './components/News/News';

function App() {

  const [platform, setPlatform] = useState('');
  const [player, setPlayer] = useState('');
  const [playerData, setPlayerData] = useState(false);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);

  console.log(news)

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
      {/* <header className="app-header">
        <h1>Wingman</h1>
      </header> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Form player={player} setPlayer={setPlayer} setPlatform={setPlatform} getPlayerData={getPlayerData} />} />
          {playerData && <Route path="/:player" element={<Layout setPlatform={setPlatform} setPlayer={setPlayer} setPlayeData={setPlayerData}/>}>
            <Route index end element={<PlayerProfile playerData={playerData} />} />
            <Route path="legends" element={<AllLegends playerData={playerData} />} />
            <Route path="news" element={<News news={news} />} />
          </Route>}
          <Route path="*" element={<Error error={error} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
