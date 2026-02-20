import React from 'react'
import { useTranslation } from 'react-i18next'

function Destination() {
  const { t } = useTranslation()
  return (
<div className="container-xxl py-5 destination">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 style={{ color: "#00BCD4" }} className="section-title bg-white text-center px-3">
        {t('destination.sectionTitle')}
      </h6>
      <h1 className="mb-5">{t('destination.title')}</h1>
    </div>
    <div className="row g-3">
      <div className="col-lg-7 col-md-6">
        <div className="row g-3">
          <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
            <div className="position-relative d-block overflow-hidden destination-card">
              <img
                style={{ height: "50vh", width: "100%", objectFit: "cover", transition: "0.5s" }}
                className="img-fluid"
                src="assets/img/Santorini Greece.png"
                alt="Santorini Greece"
              />
              <div className="bg-primary text-white fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                {t('destination.fromPrice')} $899
              </div>
              <div className="destination-label fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                Santorini
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
            <div className="position-relative d-block overflow-hidden destination-card">
              <img
                className="img-fluid"
                style={{ transition: "0.5s", width: "100%", height: "100%", objectFit: "cover" }}
                src="assets/img/Switzerland.png"
                alt="Switzerland"
              />
              <div className="bg-primary text-white fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                5 {t('destination.nights')}
              </div>
              <div className="destination-label fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                Switzerland
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
            <div className="position-relative d-block overflow-hidden destination-card">
              <img
                className="img-fluid"
                style={{ transition: "0.5s", width: "100%", height: "100%", objectFit: "cover" }}
                src="assets/img/Sardinia italy.png"
                alt="Sardinia Italy"
              />
              <div className="bg-primary text-white fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                {t('destination.fromPrice')} $699
              </div>
              <div className="destination-label fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                Sardinia
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
        <div className="position-relative d-block h-100 overflow-hidden destination-card">
          <img
            className="img-fluid position-absolute w-100 h-100"
            src="assets/img/diamond beach bali.png"
            alt="Diamond Beach Bali"
            style={{ objectFit: "cover", transition: "0.5s" }}
          />
          <div className="bg-primary text-white fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
            {t('destination.weekendTrip')}
          </div>
          <div className="destination-label fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
            Bali
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Destination
