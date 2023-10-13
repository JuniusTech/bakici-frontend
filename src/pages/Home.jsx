import React from "react"
import "../styles/Home.css"
import Footer from "../components/Footer"
import Logo from "../assets/logo.svg"
import HomeContent1 from "../components/HomeContent1"
import HomeContent2 from "../components/HomeContent2"
import HomeContent3 from "../components/HomeContent3"
import { Container } from "react-bootstrap"
import NavbarBakici from "../components/NavbarBakici"

const Home = () => {
  return (
    <div className="Home">
      <NavbarBakici />
      <HomeContent1 />
      <HomeContent2 />
      <HomeContent3 />
      <div className="HomeLastComp">
        <Container>
          <img src={Logo} alt="Logo" className="HomeLastCompLogo" />
          <p className="HomeLastCompText">
            “ Bebekleriniz için en iyi bakimi bizimle bulun “
          </p>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Home
