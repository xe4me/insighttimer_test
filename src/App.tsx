import React from 'react';
import './App.scss';
import Container from './components/container/Container';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AlbumPage from './pages/album/album-page';

function App() {
  return (
      <div className="App">
        <main>
          <Container>
            <Router>
              <Switch>
                <Route path="/album/:albumId">
                  <AlbumPage/>
                </Route>
              </Switch>
            </Router>
          </Container>
        </main>
      </div>
  );
}

export default App;
