import './App.css';
import Main from "./components/Main"
import Videopage from './components/Videopage';
import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom"; // Change the import

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter instead of Router */}
      <React.StrictMode>
        <div className="App">
          <Switch>
            <Route path="/video/:id" >
              <Videopage />
            </Route>
            <Route exact path="/" >
              <Main />
            </Route>
          </Switch>
        </div>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;

