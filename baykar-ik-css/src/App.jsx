import React from "react";
import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import FeatureBoxes from "./layouts/FeatureBoxes";
import ShowCase from "./layouts/ShowCase";
import JoinUs from "./layouts/JoinUs";
import Testimonials from "./layouts/Testimonials";
import Features from "./layouts/Features";
import Map from "./layouts/Map";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="bg-none lg:bg-triangle">
        <Hero />
        <FeatureBoxes />
      </div>
      <ShowCase />
      <JoinUs />
      <Testimonials />
      <Features />
      <Map />
      <Footer />
    </>
  );
};

export default App;
