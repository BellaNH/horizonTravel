import React from 'react'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()
  return (
  <div>
  <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            {t('contact.title')}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a 
                  href="https://www.travelusaexperiences.com" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                {t('contact.breadcrumbContact')}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>

  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          {t('contact.sectionTitle')}
        </h6>
        <h1 className="mb-5">{t('contact.weAreHere')}</h1>
        <p className="mb-5">{t('contact.intro')}</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <h5>{t('contact.getInTouch')}</h5>
          <p className="mb-4">{t('contact.getInTouchDesc')}</p>

          <div className="d-flex align-items-center mb-4">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-map-marker-alt text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-primary">{t('contact.office')}</h5>
              <p className="mb-0">350 5th Ave, New York, NY 10118, USA</p>
            </div>
          </div>

          <div className="d-flex align-items-center mb-4">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-primary">{t('contact.phone')}</h5>
              <p className="mb-0">+1 (212) 555-7890</p>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-envelope-open text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-primary">{t('contact.email')}</h5>
              <p className="mb-0">contact@travelusaexperiences.com</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <iframe
  className="position-relative rounded w-100 h-100"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.917080351786!2d-73.986488684593!3d40.748440979327824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a6b2fb%3A0xd3db7e6e6c2f09f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1692992100000!5m2!1sen!2sus"
  frameBorder={0}
  style={{ minHeight: 300, border: 0 }}
  allowFullScreen=""
  aria-hidden="false"
  tabIndex={0}
  title="Empire State Building Location Map"
/>

        </div>

        {/* Contact Form */}
        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">{t('contact.yourName')}</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">{t('contact.subject')}</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  {t('contact.sendMessage')}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
</div>

  )
}

export default Contact
