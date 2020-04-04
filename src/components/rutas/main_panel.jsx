import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../../pages/home";
import Pagina1 from "../../pages/pagina1";
import Pagina2 from "../../pages/pagina2";

class MainPanel extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/pagina1" component={Pagina1} />
          <Route path="/pagina2" component={Pagina2} />
        </div>
      </Router>
    );
  }
}

export default MainPanel;
