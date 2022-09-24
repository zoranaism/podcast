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
// import Donate from "./pages/Donate";
import Layout from "./components/Layout/Layout";
import Guests from "./pages/Guests/index";
import Radina from "./pages/Radina";
import Leanri from "./pages/Leanri";
import ScrollToTop from "./components/ScrollToTop";
import Volunteer from "./pages/Volunteer";
import ReactGA from "react-ga";
import Menu from "./StellarSoundMagazine/Menu";
import R1 from "./StellarSoundMagazine/Reviews/R1";
import JanaLyme from "./pages/JanaLyme";

const TRACKING_ID = "UA-192929021-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

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

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <div id="nj-cursor-follower"></div>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={ContactUs} />
            {/* <Route path="/donate" component={Donate} /> */}
            <Route path="/about" component={About} />
            <Route path="/radina" component={Radina} />
            <Route path="/leanri" component={Leanri} />
            <Route path="/become-a-volunteer" component={Volunteer} />
            <Route path="/guests" component={Guests} />
            <Route path="/episode-1" component={R1} />
            {/* <Route path="/stellar-sound-magazine" component={Menu} /> */}
            <Route path="/help-jana-beat-lyme" component={JanaLyme} />
          </Layout>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
