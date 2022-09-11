import React from 'react'
import './Testimonials.css'
import Wandera from '../../assets/Wandera.PNG'
import Titus from '../../assets/Titus.PNG'
import oscaris from '../../assets/oscaris.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data=[
  {
  avatar:Wandera,
  name:'Brian Wandera',
  review:'Ameda is a greater developer whom I helped nurture and with our back and forth mini-project completion, I can say he is a great developer.'
  },
  {
  avatar: Titus,
  name:'Titus Njiru',
  review: 'Kevin Ameda Kisevu is a great developer whom I helped nurture for years. I was his tutor and now he is more experienced.'
  },
  {
    avatar: oscaris,
    name:'Oscar Kisala Kisamba',
    review: 'As the CEO of Oscaris Caterers, I have much respect for Developer Ameda Kevin to have modelled it in a way I had envisioned.Good job'
    }
  ]
const testimonials = () => {
  return (
    <section  id='testimonials'>
      <h5>Review From Clients/Mentors</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials   