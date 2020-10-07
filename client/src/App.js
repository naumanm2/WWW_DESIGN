import React, {useState, useEffect} from 'react';

import Home from './pages/Home'

import pinService from './services/pins'


const App = () => {

  const [pins, setPins] = useState([])
  useEffect(() => {
    pinService.getAll().then(result => setPins(result))
  }, [])
  return (
    <div>
      <Home pins={pins} />
    </div>
  )
}

export default App;
