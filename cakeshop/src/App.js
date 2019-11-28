import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import ItemContainer from "./components/ItemContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewIceCreamContainer from "./components/NewIceCreamContainer";

function App() {
  return (
      <Provider store={store}>
    <div className="App">
        <NewIceCreamContainer/>
        <IceCreamContainer/>
        <ItemContainer cake/>
        <ItemContainer/>
        <HooksCakeContainer/>
      <CakeContainer/>
    </div>-
      </Provider>
  );
}

export default App;
