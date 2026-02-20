import React from 'react'
import { useTranslation } from 'react-i18next'

function Packages() {
  const { t } = useTranslation()
  return (
<div>
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 style={{ color: "#00BCD4" }} className="section-title bg-white text-center px-3">
          {t('packages.sectionTitle')}
        </h6>
        <h1 className="mb-5">{t('packages.title')}</h1>
      </div>
      <div className="row g-4 justify-content-center">

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="package-item">
            <div className="overflow-hidden">
              <img className="img-fluid" style={{height:"200px",width:"100%",objectFit:"cover"}} src="assets/img/Norway.png" alt="Norway tour" />
            </div>
            <div className="d-flex border-bottom">
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-map-marker-alt text-danger me-2" /> Norway
              </small>
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-calendar-alt text-warning me-2" /> 7 {t('packages.days')}
              </small>
              <small className="flex-fill text-center py-2">
                <i className="fa fa-user text-success me-2" /> 2 {t('packages.persons')}
              </small>
            </div>
            <div className="text-center p-4">
              <div className="bg-warning fw-bold py-1 px-3 rounded-pill d-inline-block mb-2">
                $2,299.00
              </div>
              <div className="mb-3">
                <small className="fa fa-star text-warning" />
                <small className="fa fa-star text-warning" />
                <small className="fa fa-star text-warning" />
                <small className="fa fa-star text-warning" />
                <small className="fa fa-star text-warning" />
              </div>
              <p>{t('packages.norwayDesc')}</p>
              <a 
href="https://www.expedia.com/Norway.d80.Destination-Guides"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-2"
              >
                {t('packages.bookNow')}
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="package-item">
            <div className="overflow-hidden">
              <img className="img-fluid" style={{height:"200px",width:"100%",objectFit:"cover"}} src="assets/img/Portugal.png" alt="Portugal tour" />
            </div>
            <div className="d-flex border-bottom">
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-map-marker-alt text-danger me-2" /> Portugal
              </small>
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-calendar-alt text-warning me-2" /> 5 {t('packages.days')}
              </small>
              <small className="flex-fill text-center py-2">
                <i className="fa fa-user text-success me-2" /> 2 {t('packages.persons')}
              </small>
            </div>
            <div className="text-center p-4">
              <div className="bg-warning fw-bold py-1 px-3 rounded-pill d-inline-block mb-2">
                $1,499.00
              </div>
              <div className="mb-3">
                <small className="fa fa-star text-warning" />
                <small className="fa fa-star text-warning" />
                <small className="fa fa-star text-warning" />
                <small className="fa fa-star text-warning" />
                <small className="fa fa-star text-warning" />
              </div>
              <p>{t('packages.portugalDesc')}</p>
              <a 
                href="https://www.expedia.com/Portugal.d80.Destination-Guides" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary mt-2"
              >
                {t('packages.bookNow')}
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
  <div className="package-item">
    <div className="overflow-hidden">
      <img 
        className="img-fluid" 
        style={{height:"200px",width:"100%",objectFit:"cover"}} 
        src="assets/img/Maldives.png" 
        alt="Maldives tour" 
      />
    </div>
    <div className="d-flex border-bottom">
      <small className="flex-fill text-center border-end py-2">
        <i className="fa fa-map-marker-alt text-danger me-2" /> Maldives
      </small>
      <small className="flex-fill text-center border-end py-2">
        <i className="fa fa-calendar-alt text-warning me-2" /> 5 {t('packages.days')}
      </small>
      <small className="flex-fill text-center py-2">
        <i className="fa fa-user text-success me-2" /> 2 {t('packages.persons')}
      </small>
    </div>
    <div className="text-center p-4">
      <div className="bg-warning fw-bold py-1 px-3 rounded-pill d-inline-block mb-2">
        $1,599.00
      </div>
      <div className="mb-3">
        <small className="fa fa-star text-warning" />
        <small className="fa fa-star text-warning" />
        <small className="fa fa-star text-warning" />
        <small className="fa fa-star text-warning" />
        <small className="fa fa-star text-warning" />
      </div>
      <p>{t('packages.maldivesDesc')}</p>
      <a 
        href="https://www.expedia.com/Maldives.d80.Destination-Guides" 
        target="_blank" 
        rel="noreferrer" 
        className="btn btn-primary mt-2"
      >
        {t('packages.bookNow')}
      </a>
    </div>
  </div>
</div>


      </div>
    </div>
  </div>
</div>

  )
}

export default Packages