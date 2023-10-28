// Homepage.tsx
import React from "react";
import HomepageHeader from "../Components/HomepageHeader";
import Footer from "../Components/Footer";
import ExhibitionsRail from "../Components/ExhibitionsRail";
import Events from "../Components/Events";
import Videos from "../Components/Videos";
import Highlights from "../Components/Highlights";
import Blogs from "../Components/Blogs";

const Homepage = () => {
  return (
    <>
  <HomepageHeader />
  <ExhibitionsRail/>
  <Events/>
  <Videos/>
  <Highlights/>
  <Blogs/>
  <Footer/>
  </>
  );
};

export default Homepage;
