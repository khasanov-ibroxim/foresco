import {Box, Button, Stack} from "@mui/material";
import {NavLink} from "react-router-dom";
import Typography from "@mui/joy/Typography";
import React from "react";
import {useGlobals} from "../../hooks/useGlobals";


export default function Header(){
    return(
            <div className={""}>
            <div className="container" style={{padding:"0 15px"}}>
                <Box className={"header-frame"}>
                    <Stack className="header-frame_left">
                        <Box className={"head-main-txt"}>
                            Find <span style={{color: "#20b486"}}>path</span> to{" "}
                            <span style={{color: "#20b486"}}>shape</span> your future with{" "}
                            <span style={{color: "#20b486"}}>confidence</span>
                        </Box>
                        <Box className={"wel-txt"}>
                            Find the perfect university with expert insights. The smartest way
                            to explore, compare, and plan your future education.
                        </Box>
                        <Box className={"service-btns"}>
                            <Box className={"signup"}>
                                <Button
                                    className={"signup-button"}
                                >
                                    Get Started
                                </Button>
                            </Box>

                            <Button className={"Scholarships"}>
                                <NavLink to="/products">
                                    <Typography className={"btn-txt"}>Scholarships</Typography>
                                </NavLink>
                            </Button>
                        </Box>
                    </Stack>
                    <Stack className={"header_element_right"}>
                        asdasd
                    </Stack>
                </Box>
                <Stack className={"detail"}>
                    <Box className={"logo-frame"}>
                        <div className={"logo-img"}></div>
                    </Box>

                    <Stack className={"brand-frame"}>
                        <Box className={"brand-txt-wrapper"}>
                            <Typography className={"txt"}>
                  <span
                      style={{
                          color: "#20B486",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "30px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "34px",
                      }}
                  >
                    250+
                  </span>
                                <br/>
                                Collaboration
                            </Typography>
                        </Box>
                        <Box className={"brand-logo"}>
                            <div className={"duolingo brand_logo_item"}><img src="/icons/duolingo.svg" alt=""/></div>
                            <div className={"codecov brand_logo_item"}><img src="/icons/codecev.svg" alt=""/></div>
                            <div className={"testing brand_logo_item"}><img src="/icons/UserTesting.svg" alt=""/></div>
                            <div className={"magic brand_logo_item"}><img src="/icons/MagicLeap.svg" alt=""/></div>
                        </Box>
                    </Stack>
                </Stack>
            </div>
        </div>
    )
}