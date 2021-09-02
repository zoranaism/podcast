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
import Episodes from "./pages/Episodes";

function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/donate" component={Donate} />
        <Route path="/about" component={About} />
        <Route path="/episodes" component={Episodes} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
