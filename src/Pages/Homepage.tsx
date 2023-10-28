// Homepage.tsx
import React from "react";
import HomepageHeader from "../Components/HomepageHeader";
import Footer from "../Components/Footer";
import ExhibitionsRail from "../Components/ExhibitionsRail";
import Events from "../Components/Events";
import Videos from "../Components/Videos";

const Homepage = () => {
  return (
    <>
  <HomepageHeader />
  <ExhibitionsRail/>
  <Events/>
  <Videos/>
  <Footer/>
  </>
  );
};

export default Homepage;
