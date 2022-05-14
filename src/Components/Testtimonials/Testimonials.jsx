import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/juhi.jpg"
import profilePic2 from "../../img/mrinal.png"
import profilePic3 from "../../img/banti.jpg"
import profilePic4 from "../../img/mithu.jpg"
import profilePic5 from "../../img/biki.jpg"
import profilePic6 from "../../img/tinku.jpg"
import profilePic7 from "../../img/puja.png"
import profilePic8 from "../../img/riya.jpg"
import profilePic9 from "../../img/bishal.jpg"
import profilePic10 from "../../img/deep.jpg"
import profilePic11 from "../../img/sanjoy.png"
import profilePic12 from "../../img/priya.jpg"









import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'


const Testimonials = () => {
    // here we using arry mathod for client slider insted of using directly

    const clients=[
        {
            img: profilePic1,
            name:"Juhi Dey",
            review:
                "Lorem ipsum dolor sit amet consectetur  elit. Quod doloremque similique inventore natus aspernatur maxime pariatur asperiores excepturi, autem mollitia minima molestias adipisci consectetur. Ipsa sed quis autem corrupti iure?"
        },
        {
            img: profilePic2,
            name:"Mrinal Gop",
            review:
                 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam quasi ea eveniet itaque sed delectus enim corporis illum quibusdam libero soluta quaerat labore ad, quidem provident, saepe amet perferendis."
        },
        {
            img: profilePic7,
            name:"Puja Maheshwari",
            review:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, reprehenderit sit. Illo ea cum nam mollitia natus veniam amet non sed eaque vitae. Sit, neque! Error inventore dolore exercitationem ducimus."
        },
        {
            img: profilePic4,
            name:"Mithu Debnath",
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius est culpa eum saepe optio. Voluptatum nesciunt, atque exercitationem optio dolore ad ut cum nemo, repellat nisi quia, adipisci fugit impedit."
        },
        {
            img: profilePic5,
            name:"Biki Dey",
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius est culpa eum saepe optio. Voluptatum nesciunt, atque exercitationem optio dolore ad ut cum nemo, repellat nisi quia, adipisci fugit impedit."
        },
        {
            img: profilePic6,
            name:"Tinku Kanjilal",
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius est culpa eum saepe optio. Voluptatum nesciunt, atque exercitationem optio dolore ad ut cum nemo, repellat nisi quia, adipisci fugit impedit."
        },
        {
            img: profilePic3,
            name:"Banti Gosh",
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius est culpa eum saepe optio. Voluptatum nesciunt, atque exercitationem optio dolore ad ut cum nemo, repellat nisi quia, adipisci fugit impedit."
        },
        {
            img: profilePic8,
            name:"Riya Das",
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius est culpa eum saepe optio. Voluptatum nesciunt, atque exercitationem optio dolore ad ut cum nemo, repellat nisi quia, adipisci fugit impedit."
        },
        {
            img: profilePic10,
            name:"Deep Acharji",

            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius est culpa eum saepe optio. Voluptatum nesciunt, atque exercitationem optio dolore ad ut cum nemo, repellat nisi quia, adipisci fugit impedit."
        },
        {
            img: profilePic9,
            name:"Bishal Das",

            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius est culpa eum saepe optio. Voluptatum nesciunt, atque exercitationem optio dolore ad ut cum nemo, repellat nisi quia, adipisci fugit impedit."
        },
        {
            img: profilePic12,
            name:"Priya Malakar",

            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius est culpa eum saepe optio. Voluptatum nesciunt, atque exercitationem optio dolore ad ut cum nemo, repellat nisi quia, adipisci fugit impedit."
        },
        {
            img: profilePic11,
            name:"Sanjoy Acharji",

            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius est culpa eum saepe optio. Voluptatum nesciunt, atque exercitationem optio dolore ad ut cum nemo, repellat nisi quia, adipisci fugit impedit."
        }
    ]

  return (

      <div className="t-wrapper" id='Testimonials'>
          <div className="t-heading">
              <span> Clients </span>
              <span> Exceptional Work  </span>
              <span> from me... </span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>

          </div>
          {/* slider */}
          <Swiper 
          modules={[Pagination]}
          slidesPerView={1}
          pagination ={{clickable:true}}

          
          >
              {clients.map((client, index)=>{
                  return(

                  <SwiperSlide key={index}>
                      <div className="testimonial">
                      <img src={client.img} alt="" />
                      <span>{client.name}</span>
                      <br />
                      <span>{client.review}</span>
                      </div>
                  </SwiperSlide>

                  )
              })}

         

          </Swiper>


      </div>
  )
}

export default Testimonials