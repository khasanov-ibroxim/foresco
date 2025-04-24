import { Box, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { plans } from "../../../lib/data/plans";
import React from "react";
import {Link} from "react-router-dom";

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function Events() {
  return (
    <div className={"events-frame"}>
      <Stack className={"events-main"}>
        <Box className={"events-text"}>
          <span className={"category-title"} style={{color:"#1a906b"}}>Events</span>
        </Box>

        <Swiper
          className={"events-info swiper-wrapper"}
          slidesPerView={3}
          spaceBetween={4}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          loop={true}
          breakpoints={{
            320: {slidesPerView: 1,},  // Mobil (<= 320px)
            576: {slidesPerView: 2,},  // Kichik ekran (<= 576px)
            768: {slidesPerView: 3,},  // O‘rta ekran (<= 768px)
          }}
        >
          {plans.map((value, number) => {
            return (
              // <SwiperSlide key={number} className={"events-info-frame"}>
              //   <div className={"events-img"}>
              //     <img src={value.img} className={"events-img"} />
              //   </div>
              //   <Box className={"events-desc"}>
              //     <Box className={"events-bott"}>
              //       <Box className={"bott-left"}>
              //         <div className={"event-title-speaker"}>
              //           <strong>{value.title}</strong>
              //           <div className={"event-organizator"}>
              //             <img src={"/icons/speaker.svg"} />
              //             <p className={"spec-text-author"}>{value.author}</p>
              //           </div>
              //         </div>
              //
              //         <p className={"text-desc"}> {value.desc} </p>
              //
              //         <div className={"bott-info"}>
              //           <div className={"bott-info-main"}>
              //             <img src={"/icons/calendar.svg"} />
              //             {value.date}
              //           </div>
              //           <div className={"bott-info-main"}>
              //             <img src={"/icons/location.svg"} />
              //             {value.location}
              //           </div>
              //         </div>
              //       </Box>
              //     </Box>
              //   </Box>
              // </SwiperSlide>
                <SwiperSlide key={number}>
                  <div className="s6_item">
                    <div className={"s6_item_img"}>
                      <Link to={"#"}><img src={value.img} alt={"sadasd"}/></Link>
                    </div>
                    <div className="s6_item_content">
                      <div className="s6_item_title">
                        By <span>{value.author}</span> • {value.date}
                      </div>
                      <h1><Link to={"#"}>{value.title}</Link></h1>
                      <p>{value.desc}</p>
                    </div>

                  </div>
                </SwiperSlide>
            );
          })}
        </Swiper>
        <Box className={"prev-next-frame"} sx={{position:"absolute !important" , top:"0"}}>
          <img
            src={"/icons/arrow-right.svg"}
            className={"swiper-button-prev"}
          />
          <div className={"dot-frame-pagination swiper-pagination"}></div>
          <img
            src={"/icons/arrow-right.svg"}
            className={"swiper-button-next"}
            style={{ transform: "rotate(-180deg)" }}
          />
        </Box>
      </Stack>
    </div>
  );
}
