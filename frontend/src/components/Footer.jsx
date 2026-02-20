import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
<div>
  <div
    className="container-fluid text-light footer pt-5 mt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="footer-content-glass">
      <div className="container py-5">
        <div className="row g-5">
        
        <div className="col-lg-4 col-md-6">
          <h4 className="text-white mb-3">{t('footer.company')}</h4>
          <a href="/about" className="btn btn-link">
            {t('footer.aboutUs')}
          </a>
          <a href="/contact" className="btn btn-link">
            {t('footer.contactUs')}
          </a>
        </div>

        <div className="col-lg-4 col-md-6">
          <h4 className="text-white mb-3">{t('footer.contact')}</h4>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            123 Main Street, New York, NY 10001, USA
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +1 (212) 555-7890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            info@wanderlusttravels.com
          </p>
        </div>

        <div className="col-lg-4 col-md-6">
          <h4 className="text-white mb-3">{t('footer.newsletter')}</h4>
          <p>{t('footer.newsletterDesc')}</p>
          <div
            className="position-relative mx-auto"
            style={{ maxWidth: 400 }}
          >
            <input
              className="form-control w-100 py-2 ps-4 pe-5"
              type="text"
              placeholder={t('footer.emailPlaceholder')}
            />
            <button
              type="button"
              className="btn email-newsLetter-btn py-2 px-4 position-absolute top-0 end-0 me-6"
            >
              {t('footer.signUp')}
            </button>
          </div>
        </div>
      </div>
    </div>

      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="copyright-text col-md-12 text-center">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
