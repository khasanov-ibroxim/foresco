import React, {useState} from 'react';
import {Drawer} from "antd";
import {Swiper, SwiperSlide} from "swiper/react";
import "./product_box.css"
import {Box, Button, Stack} from "@mui/material";
import Badge from "@mui/material/Badge";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Test = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const showDrawer = () => {
        setOpenDrawer(true);
    };
    const onCloseDrawer = () => {
        setOpenDrawer(false);
    };
    return (
        <div className="container">
            <div className="product_box">
                <div className="product_box_title">
                    <h1>University</h1>
                </div>
                <div className="product_box_content">
                    <div className="product_box_top">
                        <div className="product_box_top_left">
                            <Swiper
                                slidesPerView={6}
                                spaceBetween={20}
                                breakpoints={{
                                    320: {slidesPerView: 1,},
                                    576: {slidesPerView: 2,},
                                    768: {slidesPerView: 3,},
                                    1000: {slidesPerView: 6,},
                                }}
                                className={"product_box_swiper"}
                            >
                                <SwiperSlide><p>Dish</p></SwiperSlide>
                                <SwiperSlide><p>Salad</p></SwiperSlide>
                                <SwiperSlide><p>Drink</p></SwiperSlide>
                                <SwiperSlide><p>Desert</p></SwiperSlide>
                                <SwiperSlide><p>Other</p></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="product_box_top_right">

                            <div className="search">
                                <input type="text" className="search__input" placeholder="Type your text"/>
                                    <button className="search__button">
                                        <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                                            <g>
                                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                            </g>
                                        </svg>
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div className="product_content">
                        <div className="product_item">
                            <div className="product_item_img">
                                <img src="/img/cutlet.webp" alt=""/>
                            </div>
                            <div className="product_item_text">
                                <div className="product_item_title">🇬🇧MEXT Japan</div>
                                <div className="product_item_price">$1200</div>
                            </div>
                            <div className="product_add_to_cart">
                                
                            </div>
                        </div>
                        <div className="product_item">
                            <div className="product_item_img">

                            </div>
                            <div className="product_item_text">
                                <div className="product_item_title"></div>
                                <div className="product_item_price"></div>
                            </div>
                            <div className="product_add_to_cart">

                            </div>
                        </div>
                        <div className="product_item">
                            <div className="product_item_img">

                            </div>
                            <div className="product_item_text">
                                <div className="product_item_title"></div>
                                <div className="product_item_price"></div>
                            </div>
                            <div className="product_add_to_cart">

                            </div>
                        </div>
                        <div className="product_item">
                            <div className="product_item_img">

                            </div>
                            <div className="product_item_text">
                                <div className="product_item_title"></div>
                                <div className="product_item_price"></div>
                            </div>
                            <div className="product_add_to_cart">

                            </div>
                        </div>
                    </div>
                </div>
                <button type="primary" onClick={showDrawer}>
                    Open
                </button>

            </div>
            <Drawer title="Basic Drawer" onClose={onCloseDrawer} open={openDrawer}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    );
};

export default Test;