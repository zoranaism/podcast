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
import Episode5 from "./pages/AllEpisodes/Season1/EP5";
import Episode6 from "./pages/AllEpisodes/Season1/EP6";
import Episode7 from "./pages/AllEpisodes/Season1/EP7";
import Episode8 from "./pages/AllEpisodes/Season1/EP8";
import Episode9 from "./pages/AllEpisodes/Season1/EP9";
import SingleEpisode from "./components/EpisodesPage.component";
import Hosts from "./pages/Hosts";

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
            <Route path="/hosts" component={Hosts} />
            <Route path="/episodes" component={Episodes} />
            <SingleEpisode />
            <Route path="/episode-1" component={Episode1} />
            <Route path="/episode-2" component={Episode2} />
            <Route path="/episode-3" component={Episode3} />
            <Route path="/episode-4" component={Episode4} />
            <Route path="/episode-5" component={Episode5} />
            <Route path="/episode-6" component={Episode6} />
            <Route path="/episode-7" component={Episode7} />
            <Route path="/episode-8" component={Episode8} />
            <Route path="/episode-9" component={Episode9} />
          </Layout>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
