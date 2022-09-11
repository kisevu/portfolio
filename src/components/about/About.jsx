import React from 'react'
import './About.css'
import Me from '../../assets/about-me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about me image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 + years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3 + clients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>100% completion on projects</small>
            </article>
          </div>
          <p>
            I am an astute API and Backend Developer with Java. I am proficient in Java 8 and beyond.
            During my development I use Spring boot as my framework of choice and other spring modules in my
            development. I work with Oauth 2.0 and OpenId connect for authorization and authentication respectively,
            also I use JWT tokens for authentication as well. I understand Spring security loop holes and use 
            Maven/ Gradle build tool to organize my dependencies. I employ TDD methodology during my development and 
            sure I test my piece of code with JUnit 5 and Mockito and understand the concept of mocking as far as testing 
            individual levels of my application. I understand the concept of versioning and work-arounds as far as Git is 
            concerned. I understand the concept of virtualization and therefore I containerize my applications with Docker and 
            a little bit of orchestration with  Kubernetes and working with Minikube  clusters and Kubectl. 
            I understand the concept nodes, their networking and pods.
            I also incorporate the concept of Microservices as it helps in individualizing services which are 
            loosely coupled and they can be debugged and tested independently and also their distribution.
            The concept of API Gateway, Zipkin and many more functionalities offered with such an architecture.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default about