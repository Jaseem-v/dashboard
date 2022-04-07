
import './App.scss'
import { useState } from "react"
import Navabar from './components/navbar/Navabar';
import Header from './components/header/Header';
import Mainarea from './components/mainarea/mainarea';



function App() {
  const [opened, setOpened] = useState(false);
  return (
    <div className="app">
      <Navabar />
      <div className="app__content">
        <Header />
        <Mainarea />
      </div>
    </div>

  );
}

export default App
