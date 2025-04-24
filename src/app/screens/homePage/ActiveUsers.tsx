import React from "react";
import {Box, Container, Stack} from "@mui/material";
import {CssVarsProvider} from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

import {useSelector} from "react-redux";
import {createSelector} from "reselect";
import {retrieveTopUsers} from "./selector";
import {serverApi} from "../../../lib/config";
import {Member} from "../../../lib/types/member";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper";

/** REDUX SLICE & SELECTOR **/
const topUsersRetriever = createSelector(retrieveTopUsers, (topUsers) => ({
    topUsers,
}));

export default function ActiveUsers() {
    const {topUsers} = useSelector(topUsersRetriever);
    return (
        <div className="active-users-frame">
            <Container>
                <Stack className="main">
                    <Box className="category-title">Active <span style={{color: "#1a906b"}}> Users</span></Box>
                    <Stack className="cards-frame">
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={10}
                            pagination={{clickable: true}}
                            modules={[FreeMode]}
                            grabCursor={true}
                            breakpoints={{
                                320: {slidesPerView: 2,},  // Mobil (<= 320px)
                                576: {slidesPerView: 2,},  // Kichik ekran (<= 576px)
                                768: {slidesPerView: 2,},  // O‘rta ekran (<= 768px)
                                1200: {slidesPerView: 5,},
                            }}
                            className={"swiper_active_user"}
                        >
                            {topUsers.length !== 0 ? (
                                topUsers.map((member: Member) => {
                                    const imagePath = `${serverApi}/${member.memberImage}`;
                                    console.log(member)
                                    return (
                                        <SwiperSlide key={member._id}>
                                            <div className="card_active_user">
                                                <div className="card-active_user-border-top">
                                                </div>
                                                <div className="card_active_user_img">
                                                    <img src={"/img/cutlet.webp"} alt={member.memberNick}/>
                                                </div>
                                                <span> {member.memberNick}</span>
                                                <p className="card_active_user_job">{member.memberStatus}</p>

                                            </div>
                                        </SwiperSlide>

                                    );
                                })
                            ) : (
                                <Box className="no-data">No Active Users!</Box>
                            )}
                        </Swiper>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}
