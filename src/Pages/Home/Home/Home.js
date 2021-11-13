import React from "react";
import Footer from "../../Sheared/Footer/Footer";
import Navigation from "../../Sheared/Navigation/Navigation";
import AboutCamera from "../AboutCamere/AboutCamera";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <Review></Review>
      <AboutCamera></AboutCamera>
      <Footer></Footer>
    </div>
  );
};

export default Home;
