import React from 'react';
import './App.scss';
import Photo from './components/photo/Photo';

function App() {
  return (
    <div className="App">
     <Photo src={'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-577160911.jpg'}
            id={'test'} caption={'Photo Title'} alt={'asdsad'}/>
    </div>
  );
}

export default App;
