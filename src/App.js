import React, { useState } from 'react';
import './App.css';
import ImageGrid from './Component/imageGrid';
import Modal from './Component/Modal';
import Title from './Component/Title';
import UploadForm from './Component/Upload';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <h2 style={{ color: '#44e'}}>Portfolio Pictures</h2>
      <ImageGrid setSelectedImg={ setSelectedImg }/>
      { selectedImg && <Modal selectedImg={ selectedImg } setSelectedImg={setSelectedImg}/>} 
    </div>
  );
}

export default App;
