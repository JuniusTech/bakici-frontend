import React, { useState } from "react"
import "../../styles/BakiciProfile.css"
import profile_complete from "../../assets/profile_complete.svg"
import AboutMe from "../../components/Profile/AboutMe"
import MyAddress from "../../components/Profile/MyAddress"
import FavoriteBabysitter from "../../components/Profile/FavoriteBabysitter"
import ServiceProviders from "../../components/Profile/ServiceProviders"

const EbeveynProfile = () => {
  const [activeTab, setActiveTab] = useState("Profilim")

  const handleContentClick = (tab) => {
    setActiveTab(tab)
  }
  return (
    <>
      <div
        className="information_profile_container"
        style={{ height: "16rem" }}
      >
        <div className="information_profile">
          <div className="information_profile_text">
            <span>PROFİL BİLGİLERİM</span>
            <img src={profile_complete} alt="avatar" />
          </div>
          <div className="information_profile_content">
            {[
              "Profilim",
              "Adresim",
              "Favori Bakıcılarım",
              "Hizmet Aldığım Bakıcılar",
            ].map((tab) => (
              <li
                key={tab}
                className={`content_text ${activeTab === tab ? "active" : ""}`}
                onClick={() => handleContentClick(tab)}
              >
                {tab}
              </li>
            ))}
          </div>
        </div>
      </div>
      {activeTab === "Profilim" && <AboutMe />}
      {activeTab === "Adresim" && <MyAddress />}
      {activeTab === "Favori Bakıcılarım" && <FavoriteBabysitter />}
      {activeTab === "Hizmet Aldığım Bakıcılar" && <ServiceProviders />}
    </>
  )
}

export default EbeveynProfile
