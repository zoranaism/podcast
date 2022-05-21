import React, { useEffect } from "react";
import "./App.css";
import "./assets/css/assets.min.css";
import "./assets/css/style.min.css";
import {
  Switch,
  Route,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";
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
import Justen from "./pages/Justen";
import Radina from "./pages/Radina";
import Leanri from "./pages/Leanri";
import ScrollToTop from "./components/ScrollToTop";

const injectAppScript = () => {
  // Remove old script, redundant (╯°□°）╯︵ ┻━┻
  const prevScript = document.querySelector('script[src="/js/app.min.js"]');
  if (prevScript) {
    prevScript.remove();
  }

  // Re-inject script so new elements can be found ┬─┬ノ( º _ ºノ)
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "/js/app.min.js";

  document.querySelector("head").appendChild(script);
};

function App() {
  const location = useLocation();

  useEffect(() => {
    injectAppScript();
  }, [location]);

  return (
    <Router>
      <div id="nj-cursor-follower"></div>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/donate" component={Donate} />
            <Route path="/about" component={About} />
            <Route path="/justen" component={Justen} />
            <Route path="/radina" component={Radina} />
            <Route path="/leanri" component={Leanri} />
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
