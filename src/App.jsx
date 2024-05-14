import { useState } from 'react';
import View from './components/View';
import ViewData from './components/ViewData';
import './App.css';
import { MyContext } from './MyContext';

function App() {
  const [items, setItems] = useState([]);

  return (
    <MyContext.Provider value={{ items, setItems }}>
      <View />
      <ViewData />
    </MyContext.Provider>
  );
}

export default App;
