import React from "react";

import { BannerTwo, Container } from "./styles";

import TopBar from "./internals/TopBar";
import NavBar from "./internals/NavBar";
import NavBarBottom from "./internals/NavBarBottom";
import Banner from "./internals/Banner";
import Newsletter from "./internals/Newsletter";
import Blog from "./internals/Blog";
import CallToAction from "./internals/CallToAction";
import Footer from "./internals/Footer";

const Home = () => {
  return (
    <>
      <Container>
        <TopBar />
        <NavBar />
        <NavBarBottom />
        <Banner title="Bem-vindo ao Instituto de Cultura Hindu Naradeva Shala" />
        <Newsletter />
        <Blog />
        <BannerTwo>
          <h1>Banner de curso</h1>
        </BannerTwo>
        <Blog />
        <CallToAction />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
