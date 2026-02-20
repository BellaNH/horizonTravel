import React from 'react'
import { useTranslation } from 'react-i18next'

function Booking() {
  const { t } = useTranslation()
  return (
  <div className="container-l wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="booking d-flex flex-column gap-4 p-4 p-md-5 rounded-4 shadow">
      
      <h1 className="text-primary">{t('booking.title')}</h1>

      <div className="d-flex flex-column flex-lg-row gap-4">
        <div className="grid-left-side w-100 d-flex flex-column gap-3">
          <div className="d-flex flex-column">
            <p className="mb-1 booking-label">{t('booking.destination')}</p>
            <input className="booking-input ps-3 pe-4 py-2" placeholder={t('booking.destinationPlaceholder')} />
          </div>

          <div className="d-flex gap-3 flex-column flex-md-row">
            <div className="d-flex flex-column w-100">
              <p className="mb-1 booking-label">{t('booking.departureDate')}</p>
              <input type="date" className="py-2 ps-3 pe-4 booking-input" />
            </div>
            <div className="d-flex flex-column w-100">
              <p className="mb-1 booking-label">{t('booking.returnDate')}</p>
              <input type="date" className="py-2 ps-3 pe-4 booking-input" />
            </div>
          </div>

          <div className="d-flex flex-column">
            <p className="mb-1 booking-label">{t('booking.travelBudget')}</p>
            <input className="booking-input ps-3 pe-4 py-2" placeholder={t('booking.travelBudgetPlaceholder')} />
          </div>
        </div>

        <div className="grid-right-side w-100 d-flex flex-column gap-3">
          <h2 className="text-primary d-lg-none right-grid-title m-0">{t('booking.personalDetails')}</h2>

          <div className="d-flex gap-3 flex-column flex-md-row m-0">
            <div className="d-flex flex-column w-100">
              <p className="mb-1 booking-label">{t('booking.numberOfAdults')}</p>
              <input className="py-2 ps-3 pe-4 booking-input" />
            </div>
            <div className="d-flex flex-column w-100">
              <p className="mb-1 booking-label">{t('booking.numberOfChildren')}</p>
              <input className="py-2 ps-3 pe-4 booking-input" />
            </div>
          </div>

          <div className="d-flex flex-column">
            <p className="mb-1 booking-label">{t('booking.phoneNumber')}</p>
            <input className="booking-input ps-3 pe-4 py-2" placeholder={t('booking.phonePlaceholder')} />
          </div>

          <div className="d-flex flex-column">
            <p className="mb-1 booking-label">{t('booking.emailAddress')}</p>
            <input className="booking-input ps-3 pe-4 py-2" placeholder={t('booking.emailPlaceholder')} />
          </div>

          <div className="d-flex justify-content-start">
            <button className="btn btn-booking-form py-2 px-4">{t('booking.submit')}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



  )
}

export default Booking
