import React from 'react';
import Header from "./components/Header";
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import './App.css'


class App extends React.Component {
  render(){
    return (
      <div>
      <Header/>
       <Component1/>
       <Component2/>
       </div>
     );
  }
 
}

export default App;
