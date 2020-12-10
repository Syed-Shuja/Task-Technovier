import React from 'react';
import './App.css';
import './Table.css';
import Header from './component/header';
import Table from './component/table.jsx';
import SidePanel from './component/side-panel.jsx';
import PersistentDrawerLeft from './component/newSidepanel'




class App extends React.Component {
  render() {
  return (
    <div className="App">
      
      <PersistentDrawerLeft/>
      <Table/>

    </div>
  )
}

}

export default App;
