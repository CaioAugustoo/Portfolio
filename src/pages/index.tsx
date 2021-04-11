import Header from "components/UI/Header";
import Home from "components/Sections/Home";

import GlobalStyles from "styles/globals";
import AboutSection  from "components/Sections/About";
import PortfolioSection from "components/Sections/Portfolio";
import ScrollTop from "components/UI/ScrollTop";

const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutSection />
      <PortfolioSection />
      <ScrollTop />
      <GlobalStyles />
    </>
  );
};

export default HomePage;
