import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review1: "This is an attractive and friendly example",
      review2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iusto et? Animi autem tempore voluptatibus dolorum. Architecto quia nemo, omnis quis magni quidem, facilis dolorum, atque minus officia repudiandae sunt!",
    },
    {
      img: profilePic2,
      review1: "This is an attractive and friendly example",
      review2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iusto et? Animi autem tempore voluptatibus dolorum. Architecto quia nemo, omnis quis magni quidem, facilis dolorum, atque minus officia repudiandae sunt!",
    },
    {
      img: profilePic3,
      review1: "This is an attractive and friendly example",
      review2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iusto et? Animi autem tempore voluptatibus dolorum. Architecto quia nemo, omnis quis magni quidem, facilis dolorum, atque minus officia repudiandae sunt!",
    },
    {
      img: profilePic4,
      review1: "This is an attractive and friendly example",
      review2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iusto et? Animi autem tempore voluptatibus dolorum. Architecto quia nemo, omnis quis magni quidem, facilis dolorum, atque minus officia repudiandae sunt!",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading" id="Testimonials">
        <span>Clients always get</span>
        <span> Exceptional Work</span>
        <span> from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review1}</span>
                <span>{client.review2}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
