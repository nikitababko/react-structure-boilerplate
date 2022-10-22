import React from 'react';
import { Header } from '../Header';
import { LocalStorageService } from '../../services/LocalStorage/LocalStorage.service';

function App() {
  console.log(LocalStorageService.getItem('10'));

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
