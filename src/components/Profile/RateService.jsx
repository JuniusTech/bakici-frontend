import React from "react"
import pausePast from "../../assets/carbon_pause-past.png"
import hakkimda_img from "../../assets/hakkimda_img.svg"
import stars from "../../assets/stars.png"
import halfStars from "../../assets/half-star.png"
import "../../styles/Profile/RateService.css"
import { rateServiceQuestions } from "../../helper/options"

const RateService = () => {
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
          width: "60%",
        }}
        className="my_address_container"
      >
        <div className="my_address">
          <div className="my_address_text">
            <span>HİZMET ALDIĞIM BAKICILAR</span>
            <img src={pausePast} alt="carbon-Pause-Past" />
          </div>
        </div>

        <div className="rate-service-container">
          <div className="rate-service-babysitter">
            <img src={hakkimda_img} alt="avatar" /> {/* Avatar */}
            <p className="rate-service-babysitter-name">Tuğba Aksoy</p>
            <section className="rate-service-babysitter-star">
              <img src={stars} alt="stars" /> {/*Rate */}
              <p>4.7</p>
            </section>
          </div>
          <section className="rate-service-babysitter-status">
            <p>Bakıcınızdan Aldığınız Hizmete Puan Verin!</p>
            <img src={halfStars} alt="rate" />
            <p>ORTALAMA!</p>
          </section>
          <section className="comment-container">
            <p>Bakıcınızdan Aldığınız Hizmeti Nasıl Değerlendirirsiniz?</p>
            <textarea
              name="degerlendirme"
              placeholder="Aldığınız hizmeti değerlendirin"
              id="evaluation-text-area"
              cols="30"
              rows="10"
            ></textarea>
          </section>
          <div className="detailed-assessment-container">
            <section
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <p className="detailed-assessment-header">
                Aldığınız Hizmeti Ayrıntılı Olarak Değerlendirin
              </p>
            </section>
            {rateServiceQuestions.map((e) => (
              <section key={e.id} className="option-evaluation">
                <p>{e.questions}</p>
                <section>
                  <input
                    className="custom-radio-true"
                    type="radio"
                    name="opiton1"
                    id={e.trueRadioID}
                  />
                  <input
                    className="custom-radio-false"
                    type="radio"
                    name="opiton1"
                    id={e.falseRadioID}
                  />
                </section>
              </section>
            ))}
          </div>
        </div>
        <section className="rate-service-button-container">
          <button>Gönder</button>
        </section>
      </div>
    </>
  )
}

export default RateService
