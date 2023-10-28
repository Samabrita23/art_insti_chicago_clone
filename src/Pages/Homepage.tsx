// Homepage.tsx
import React from "react";
import HomepageHeader from "../Components/HomepageHeader";
import Footer from "../Components/Footer";
import ExhibitionsRail from "../Components/ExhibitionsRail";
import Events from "../Components/Events";

const Homepage = () => {
  return (
    <>
  <HomepageHeader />
  <ExhibitionsRail/>
  <Events/>
  <Footer/>
  </>
  );
};

export default Homepage;
