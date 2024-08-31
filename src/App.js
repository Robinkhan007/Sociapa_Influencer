import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/header"; // Ensure the correct path to Header component
// import Home from "./Home";
// import About from "./About";
// import Work from "./Work"; // Add other components like Work, Brand, Influencer, etc.
// import Contact from "./Contact";
import "./App.css";
import BrandsSection from "./components/Brand/BrandSection";
import WhyChooseUs from "./components/whyChooseus";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Persistent Header */}
        <Header />
        <BrandsSection />
        <WhyChooseUs/>

        {/* Main Content Area */}
        <div className="content">
          {/* <Switch> */}
          {/* <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/brand" component={Brand} />
            <Route path="/influencer" component={Influencer} />
            <Route path="/contact" component={Contact} /> */}
          {/* Add more routes as needed */}
          {/* </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
