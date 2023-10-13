import React from "react"
import "../../styles/Profile/MyAddress.css"
import "../../styles/Profile/FavoriteBabysitter.css"
import { babySitterInfo } from "../../helper/options"
import timeOne from "../../assets/Time1.svg"
import timeTwo from "../../assets/Time2.svg"
import Heart from "../../assets/Hearth"
import languageIcon from "../../assets/LANGUAGE.png"
import layer from "../../assets/Layer_1.png"
import ilkyardim from "../../assets/Group8242.png"
import stars from "../../assets/stars.png"
import carbonPausePast from "../../assets/carbon_pause-past.png"

const FavoriteBabysitter = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "1rem",
          height: "fit-content",
          width: "58%",
        }}
        className="my_address_container"
      >
        <div className="my_address">
          <div className="my_address_text">
            <span>FAVORİ BAKICILARIM</span>
            <img src={carbonPausePast} alt="carbon-Pause-Past" />
          </div>
        </div>
        {babySitterInfo.map((e) => {
          return (
            <div className="favorite-babysitter-container">
              <div className="favorite-babysitter-card">
                <div>
                  <img src={e.image} alt="babysitter-image" />
                </div>
                <div className="favorite-babysitter-info">
                  <section className="babysitter-name-rate-status">
                    <span className="name-text">{e.name}</span>
                    <section
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src={stars} alt="stars" />
                      <span
                        style={{ marginLeft: "1rem" }}
                        className="name-text"
                      >
                        {e.rate}
                      </span>
                    </section>
                    <span className="status-text">{e.status}</span>
                  </section>
                  <section className="experience-info">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: ".5rem",
                      }}
                    >
                      <section>
                        <img src={languageIcon} alt="asd" />
                        <span style={{ marginLeft: "0.5rem" }}>
                          {e.languge}
                        </span>
                      </section>
                      <section>
                        <img src={layer} alt="asd" />
                        <span style={{ marginLeft: "0.5rem" }}>
                          {e.experience}
                        </span>
                      </section>
                      <section>
                        <img src={ilkyardim} alt="asd" />
                        <span style={{ marginLeft: "0.5rem" }}>{e.info}</span>
                      </section>
                    </div>
                    <section className="working-status-container">
                      <img src={timeOne} alt="time-one" />
                      <span className="working-status">{e.workingStatus}</span>
                      <img
                        style={{ marginLeft: "0.5rem" }}
                        src={timeTwo}
                        alt="time-two"
                      />
                      <span className="working-status">{e.workingStatus2}</span>
                    </section>
                  </section>
                  <section className="working-conditions-container">
                    <span className="name-text">{e.runtime}</span>
                    <span style={{ marginLeft: "5px" }}>{e.workingDays}</span>
                    <span className="price-info">₺{e.price}</span>
                  </section>
                </div>
                <div className="like">
                  <Heart />
                  <p style={{ marginRight: "8px", color: "#F74D4D" }}>
                    {e.likes}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FavoriteBabysitter
