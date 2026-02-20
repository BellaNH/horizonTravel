import React from 'react'
import { useTranslation } from 'react-i18next'

function Services() {
  const { t } = useTranslation()
  return (
<div>
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6
          style={{ color: "#00BCD4" }}
          className="section-title bg-white text-center px-3"
        >
          {t('services.sectionTitle')}
        </h6>
        <h1 className="mb-5">{t('services.title')}</h1>
      </div>

      <div className="row g-4">
        <div
          className="col-lg-3 col-sm-6 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i
                className="fa fa-3x fa-globe mb-4"
                style={{ color: "#00BCD4" }}
              />
              <h5>{t('services.worldwideTours')}</h5>
              <p>{t('services.worldwideToursDesc')}</p>
            </div>
          </div>
        </div>

        <div
          className="col-lg-3 col-sm-6 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i
                style={{ color: "#00BCD4" }}
                className="fa fa-3x fa-hotel mb-4"
              />
              <h5>{t('services.hotelReservations')}</h5>
              <p>{t('services.hotelReservationsDesc')}</p>
            </div>
          </div>
        </div>

        <div
          className="col-lg-3 col-sm-6 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i
                className="fa fa-3x fa-user mb-4"
                style={{ color: "#00BCD4" }}
              />
              <h5>{t('services.localGuides')}</h5>
              <p>{t('services.localGuidesDesc')}</p>
            </div>
          </div>
        </div>

        <div
          className="col-lg-3 col-sm-6 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i
                className="fa fa-3x fa-cog mb-4"
                style={{ color: "#00BCD4" }}
              />
              <h5>{t('services.eventGroupTravel')}</h5>
              <p>{t('services.eventGroupTravelDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Services