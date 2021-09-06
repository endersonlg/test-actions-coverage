// eslint-disable-next-line no-use-before-define
import React from 'react';

import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/config">config</Link>
          </li>
          <li>
            <Link to="/user">user</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/config">
          <Config />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

const Home = () => (
  <div>
    <h1>Test Git Hub Actions 2</h1>
    <p>Deploy GitHub Page</p>
    <p>Teste SubModules</p>
    <p>Finished??</p>
    <p>Git??</p>
    <p>Segundouu?</p>
    <p>gogo?</p>
  </div>
);

const User = () => (
  <div>
    <h1>Enderson Lúcio Garcia</h1>
    <p>Pouso Alegre</p>
  </div>
);

const Config = () => (
  <div>
    <h1>React + Node</h1>
    <p>BOm demais</p>
  </div>
);

export default App;
