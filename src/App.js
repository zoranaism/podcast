import React from "react";
import "./App.css";
import "./assets/css/assets.min.css";
import "./assets/css/style.min.css";

import { Switch, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Layout from "./components/Layout/Layout";
import AllEpisodes from "./pages/AllEpisodes";

function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/donate" component={Donate} />
        <Route path="/about" component={About} />
        <Route path="/episodes" component={AllEpisodes} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
