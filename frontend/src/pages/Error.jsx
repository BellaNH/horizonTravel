import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Error() {
  const { t } = useTranslation()
  return (
    <div>
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            {t('error.notFound')}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/">{t('error.breadcrumbHome')}</Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                404
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
      {/* 404 Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-primary" />
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">{t('error.pageNotFound')}</h1>
            <p className="mb-4">
              We’re SORRY_MSG
            </p>
            <Link className="btn btn-primary rounded-pill py-3 px-5" to="/">
              {t('error.goBackHome')}
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* 404 End */} 
    </div>
  )
}

export default Error
