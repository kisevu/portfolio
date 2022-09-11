import React from 'react'
import './Portfolio.css'
import data from '../../assets/data.PNG'
import microservices from '../../assets/microservices.PNG'
import security from '../../assets/security.PNG'

const val=[
  {
  id:1,
  image:security,
  title:'spring security',
  github:'https://github.com/kisevu/Spring-security-' ,
  url: 'https://github.com/kisevu/security'
  },
  {
    id:2,
    image:data,
    title: 'spring data jpa',
    github: 'https://github.com/kisevu/spring-data',
    url: 'https://github.com/kisevu/spring-data' 
  },
  {
    id:3,
    image:microservices,
    title: 'spring microservices',
    github: 'https://github.com/kisevu/My-microservice',
    url: 'https://github.com/kisevu/My-microservice' 
  }
  ]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        val.map(({id,image,title,github,url})=>{
          return(
            <article key={id}  className="portfolio__item">
            <div className="portfolio__item-image">
            <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <a href={url} className='btn btn-primary'
              target='_blank'>Live Demo</a>
              </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio