import React, { useState } from "react"
import "../../styles/BakiciProfile.css"
import profile_complete from "../../assets/profile_complete.svg"
import AboutMe from "../../components/Profile/AboutMe"
import ProfileDescription from "../../components/Profile/ProfileDescription"
import MyAddress from "../../components/Profile/MyAddress"
import MyServices from "../../components/Profile/MyServices"
import CompleteApplication from "../../components/Profile/CompleteApplication"
import MyExperiences from "../../components/Profile/MyExperiences"
import MyPhotos from "../../components/Profile/MyPhotos"
import BankAccount from "../../components/Profile/BankAccount"
import Pay from "../../components/Profile/Pay"

const BakiciProfile = () => {
  const [activeTab, setActiveTab] = useState("Hakkımda")

  const handleContentClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <div className="information_profile_container">
        <div className="information_profile">
          <div className="information_profile_text">
            <span>PROFİL BİLGİLERİM</span>
            <img src={profile_complete} alt="" />
          </div>
          <div className="information_profile_content">
            {[
              "Hakkımda",
              "Profil Açıklaması",
              "Adresim",
              "Hizmetlerim",
              "Deneyim Bilgilerim",
              "Fotoğraflarım",
              "Banka Hesabım",
              "Bakıcı Başvurusunu Tamamla",
              "Ücret",
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

      {activeTab === "Hakkımda" && <AboutMe />}
      {activeTab === "Profil Açıklaması" && <ProfileDescription />}
      {activeTab === "Adresim" && <MyAddress />}
      {activeTab === "Hizmetlerim" && <MyServices />}
      {activeTab === "Deneyim Bilgilerim" && <MyExperiences />}
      {activeTab === "Fotoğraflarım" && <MyPhotos />}
      {activeTab === "Banka Hesabım" && <BankAccount />}
      {activeTab === "Bakıcı Başvurusunu Tamamla" && <CompleteApplication />}
      {activeTab === "Ücret" && <Pay />}
    </>
  )
}

export default BakiciProfile
