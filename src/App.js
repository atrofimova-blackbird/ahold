import React from 'react'
import FlippContainer from './FlippContainer'
import { Tab } from 'semantic-ui-react'
import './App.css';


function App() {

  return (
      <div className="App">
        <Tab menu={{ fluid: true, vertical: true, tabular: true }}
             panes={[
               { menuItem: 'Something', render: () => <Tab.Pane><div>
                   Something
                 </div></Tab.Pane> },
               { menuItem: 'Flipp', render: () => <Tab.Pane>
                   <FlippContainer />
                 </Tab.Pane> },
             ]} />
      </div>
  );
}

export default App;
