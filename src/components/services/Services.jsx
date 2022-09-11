import React from 'react'
import './Services.css'
import {BsCheckLg} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className="service__list-icon"/>
              <p>Landing pages design</p>
              </li>
              <li>
              <BsCheckLg className="service__list-icon"/>
              <p>Single Page Applications-SPAs</p>
              </li>
              <li>
              <BsCheckLg className="service__list-icon"/>
              <p>Responsive websites with fluid flow</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className="service__list-icon"/>
              <p>RESTful Services</p>
              </li>
              <li>
              <BsCheckLg className="service__list-icon"/>
              <p>System design</p>
              </li>
              <li>
              <BsCheckLg className="service__list-icon"/>
              <p>Android Development</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>DevOps Services</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className="service__list-icon"/>
              <p>Containerization with Docker</p>
              </li>
              <li>
              <BsCheckLg className="service__list-icon"/>
              <p>Orchestration with Kubernetes</p>
              </li>
              <li>
              <BsCheckLg className="service__list-icon"/>
              <p>Application monetirization</p>
            </li>
          </ul>
        </article>
      </div>
      {/* END OF UI/UX DESIGN*/}
      <div className="container services__container">
        
      </div>
    </section>
  )
}

export default Services