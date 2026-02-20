import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t, i18n } = useTranslation()

  return (
<div>
  <div className="container-fluid px-5 d-none d-lg-block" style={{ backgroundColor: '#00BCD4' }}>
      <div className="py-3 d-flex flex-wrap align-items-center gap-5 mb-2 mb-lg-0">
  <small className="text-light">
    <i className="fa fa-map-marker-alt me-2" />
    455 Madison Ave, New York, NY 10022, USA
  </small>
  <small className="text-light">
    <i className="fa fa-phone-alt me-2" />
    +1 (212) 555-0199
  </small>
  <small className="text-light">
    <i className="fa fa-envelope-open me-2" />
    info@exploreamerica-travel.com
  </small>
</div>
  </div>

  <div className="container-fluid position-relative p-0 ">
    <nav
      style={{ backgroundColor: '#00BCD4' }}
      className="navbar navbar-light navbar-expand-lg bg-white px-4 px-lg-5 py-8"
    >
      <Link to="/" className="navbar-brand p-0" />
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 align-items-center">
          <Link to="/" className="nav-item nav-link">{t('header.home')}</Link>
          <Link to="/About" className="nav-item nav-link">{t('header.about')}</Link>
          <Link to="/Services" className="nav-item nav-link">{t('header.services')}</Link>
          <Link to="/Packages" className="nav-item nav-link">{t('header.packages')}</Link>
          <Link to="/Contact" className="nav-item nav-link">{t('header.contact')}</Link>
          <div className="d-flex ms-3 gap-1">
            <button
              type="button"
              className="btn btn-sm text-white border border-white px-2 py-1"
              style={{ fontSize: '0.8rem', opacity: i18n.language === 'fr' ? 1 : 0.7 }}
              onClick={() => i18n.changeLanguage('fr')}
            >
              FR
            </button>
            <button
              type="button"
              className="btn btn-sm text-white border border-white px-2 py-1"
              style={{ fontSize: '0.8rem', opacity: i18n.language === 'en' ? 1 : 0.7 }}
              onClick={() => i18n.changeLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>
  )
}

export default Header