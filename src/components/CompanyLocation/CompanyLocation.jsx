import React from 'react'
import "./CompanyLocation.css"
const CompanyLocation = () => {
  return (
    <div>
      <address className='address'>
        Company Location
      </address>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57414.034897892896!2d80.77525971931625!3d25.92283732298837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b62a898d5e3e1%3A0x26b3191124c56770!2sFatehpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1719373267247!5m2!1sen!2sin" width="550" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div>
        Fatehpur, Uttar Pradesh, India
      </div>
    </div>
  )
}

export default CompanyLocation
