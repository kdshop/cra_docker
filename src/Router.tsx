import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import {ComposeModule, HomeModule, PrintModule} from "./modules";
import {Eula, NotFound} from "./modules/core/components";
import { ModalContainer, ModalRoute } from 'react-router-modal';
import 'react-router-modal/css/react-router-modal.css';

const state = {
  authenticated: true,
  loading: false,
};

const Authentication = () => {
  if (!state.authenticated) {
    document.location.href = 'https://www.wp.pl';
  }

  return undefined;
};

const Router: React.FC = () => {
  return (
    <BrowserRouter getUserConfirmation={Authentication()}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/compose">Compose</Link>
            </li>
            <li>
              <Link to="/print">Print</Link>
            </li>
            <li>
              <Link to="/bar">Print</Link>
            </li>
          </ul>
        </nav>
      </div>
      <ModalContainer />
      <Switch>
        <Route path="/" exact component={HomeModule} />
        <Route path="/compose" component={ComposeModule} />
        <Route path="/print" component={PrintModule} />
        <ModalRoute component={Eula} path='/eula'/>
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
