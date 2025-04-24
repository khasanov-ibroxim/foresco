import React, {useState} from "react";
import {CloseOutlined} from "@mui/icons-material";
export default function Advertisement() {
    const [playPosition, setPlayPosition] = useState({x: "50%", y: "50%"});
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const {left, top, width, height} = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPlayPosition({x: `${x}%`, y: `${y}%`});
    };
    const handleMouseLeave = () => {
        setPlayPosition({ x: "50%", y: "50%" }); // Tugmani yana markazga qaytarish
    };
    return (
        <section className={"home_s7"} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="container">
                <div className="home_s7_box " onClick={() => setIsOpen(true)}>
                    <div className="home_s7_play" style={{top: playPosition.y, left: playPosition.x}}>
                        PLAY
                    </div>
                    <div className="home_s7_opacity"></div>
                    <div className="home_s7_slide">
                        <video src="/video/burak-ads.mp4" autoPlay={true} loop={true}></video>
                    </div>


                </div>
            </div>

            {isOpen && (
                <div className="home_s7_modal">
                    <div className="home_s7_modal_content">
                        <button
                            className="home_s7_modal_close"
                            onClick={() => setIsOpen(false)}
                        >
                            <CloseOutlined/>
                        </button>
                        <video src="/video/burak-ads.mp4" autoPlay={true} controls={true} style={{
                            width:"80%",
                            height:"80%",
                        }}></video>
                    </div>
                </div>
            )}
        </section>

    );
}