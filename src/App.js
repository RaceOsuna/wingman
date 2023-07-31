import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [player, setPlayer] = useState('kshagwell');

  useEffect(() => {
    fetch(`https://api.mozambiquehe.re/bridge?auth=bae15f3f336782882976819cd65d9ef3&player=${player}&platform=PC`)
    .then(res => res.json())
    .then(data => console.log(data.global))
  }, [player])

  return (
    <div className="App">
    </div>
  );
}

export default App;
