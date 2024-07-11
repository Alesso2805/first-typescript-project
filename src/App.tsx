import React from 'react';
import './App.css';
import {Person, Country} from "./components/Person";

function App() {

  return (
    <div className="App">
        <Person
            name="Alessandro"
            email="alessandrodp2222@gmail.com"
            age={21}
            isMarried={true}
            friends={["alan", "andre", "tyler", "josh", "jessica"]}
            country={Country.France}
        ></Person>
    </div>
  );
}

export default App;
