import React from 'react';
import "./footer.css"

import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EastIcon from '@mui/icons-material/East';
import {Link} from "react-router-dom";
import logo from "../images/logo.png"


const FooterElement = () => {

    return (
        <div className="footer" >
            <div className="container-sm pt-5 pb-5">
                <div className="row" style={{justifyContent: "space-between"}}>
                    <div className="col-lg-3">
                        <div className="footer_item_1">
                            <img src={logo} alt=""/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid deserunt harum
                                nihil? Doloremque explicabo natus odio omnis provident quo!
                            </p>
                            <div className="footer_social" >
                                <a className="footer_social_circle"
                                   href={"https://t.me/akyusstoree"}>
                                    <TelegramIcon/></a>
                                <a className="footer_social_circle"
                                   href={"https://www.instagram.com/akyus.store?igsh=Z2NhNHhucGF2bzU2"}>
                                    <InstagramIcon/></a>

                                <Link className="footer_social_circle" to={"#"}><FacebookIcon/></Link>

                                <Link className="footer_social_circle" to={"#"}><WhatsAppIcon/></Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_item_def">
                            <h4>О нас</h4>
                            <ul>
                                <li><Link to={"#"}>Наша история</Link></li>
                                <li><Link to={"#"}>Наша миссия</Link></li>
                                <li><Link to={"#"}>Свяжитесь с нами</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_item_def">
                            <h4>Покупателям</h4>
                            <ul>
                                <li><Link to={"#"}>Доставка и оплата</Link></li>
                                <li><Link to={"#"}>Вопросы</Link></li>
                                <li><Link to={"#"}>Таблица размеров</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_item_def">
                            <h4>Следите за нами</h4>
                            <p>Будьте в курсе новинок и акций</p>
                            <ul className={"d-flex flex-row"}>
                                <li><Link to={"#"}><InstagramIcon/></Link></li>
                                <li><Link to={"#"}><TelegramIcon/></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_last_item">
                            <h3>Связаться с нами</h3>
                            <p>Задайте вопрос или оформите заказ — мы всегда на связи</p>
                            <Link to={"#"}>Контакты <EastIcon/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterElement;