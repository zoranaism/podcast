import React from "react";
import "./App.css";
import "./assets/css/assets.min.css";
import "./assets/css/style.min.css";

import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Layout from "./components/Layout/Layout";
import Episodes from "./pages/Episodes";
import Episode1 from "./pages/AllEpisodes/Season1/EP1";
import Episode2 from "./pages/AllEpisodes/Season1/EP2";
import Episode3 from "./pages/AllEpisodes/Season1/EP3";
import Episode4 from "./pages/AllEpisodes/Season1/EP4";

function App() {
  return (
   <Router>
      <div className="App">
      <Switch>
        <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/donate" component={Donate} />
        <Route path="/about" component={About} />
        <Route path="/episodes" component={Episodes} />
        <Route path="/episode-1" component={Episode1} />
        <Route path="/episode-2" component={Episode2} />
        <Route path="/episode-3" component={Episode3} />
        <Route path="/episode-4" component={Episode4} />

        </Layout>
      </Switch>
    </div>

   </Router>
  );
}

export default App;
