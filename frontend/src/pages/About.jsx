import React from 'react'
import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()
  return (
<div>
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div
          className="col-lg-6 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ minHeight: 400 }}
        >
          <div className="position-relative h-100">
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="assets/img/beach.png"
              alt="Travel experience"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6
            className="section-title bg-white text-start pe-3"
            style={{ color: "#00BCD4" }}
          >
            {t('about.sectionTitle')}
          </h6>
          <h1 className="mb-4">
            {t('about.welcome')} <span style={{ color: "#00BCD4" }}>{t('about.brandName')}</span>
          </h1>
          <p className="mb-4">{t('about.paragraph1')}</p>
          <p className="mb-4">{t('about.paragraph2')}</p>
          <div className="row gy-2 gx-4 mb-4">
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right me-2" style={{ color: "#00BCD4" }} />
                {t('about.firstClassFlights')}
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right me-2" style={{ color: "#00BCD4" }} />
                {t('about.handpickedHotels')}
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right me-2" style={{ color: "#00BCD4" }} />
                {t('about.fiveStarAccommodations')}
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right me-2" style={{ color: "#00BCD4" }} />
                {t('about.latestModelVehicles')}
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right me-2" style={{ color: "#00BCD4" }} />
                {t('about.premiumCityTours')}
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right me-2" style={{ color: "#00BCD4" }} />
                {t('about.customerSupport')}
              </p>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default About