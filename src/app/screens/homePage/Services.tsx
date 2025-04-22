import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";
import Typography from "@mui/joy/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Services() {
  return (
    <div className={"services-frame"}>
      <Container>
        <Stack className={"info"}>
          <Typography className={"title"}>Our Services</Typography>
          <Typography className={"txt"}>
            The smartest way to explore, compare, and plan your future
            education.
          </Typography>
        </Stack>
        <Stack className={"cards"}>
          <Box className={"card"}>
            <div className="container our-services">
              <div className="row  d-flex justify-content-between">
                <div className="col-lg-4">
                  <div className="flip-container">
                    <div className="flipper">
                      <div className="front" style={{ background: "#4AC8AE" }}>
                        <Box className={"content-wrapper"}>
                          <div className="title">
                            <img src="/icons/services-phone.svg" alt="Avatar" />
                            <Typography className={"title-txt"}>
                              Guided Applications
                            </Typography>
                          </div>
                          <Box className={"content"}>
                            <Typography className={"txt"}>
                              Step-by-step support to help you apply with
                              confidence.
                            </Typography>
                            <Box className="button">
                              <button>
                                <span className="btn-txt">Learn more</span>
                                <span className="btn-img">
                                  <img src="/icons/vector.svg" />
                                </span>
                              </button>
                            </Box>
                          </Box>
                        </Box>
                      </div>
                      <div className="back" style={{ background: "white" }}>
                        <Typography className={"title"}>
                          Help you apply with confidence
                        </Typography>
                        <Typography className={"txt"}>
                          Breaks down the college application into sections
                          (personal info, essays, transcripts, recommendations,
                          etc.).
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="flip-container">
                    <div className="flipper">
                      <div className="front" style={{ background: "white" }}>
                        <Box className={"content-wrapper"}>
                          <div className="title">
                            <img src="/icons/services-pc.svg" alt="Avatar" />
                            <Typography
                              className={"title-txt"}
                              style={{ color: "black" }}
                            >
                              Writing Essays
                            </Typography>
                          </div>
                          <Box className={"content"}>
                            <Typography
                              className={"txt"}
                              style={{ color: "black" }}
                            >
                              Expert advice to make your application stand out.
                            </Typography>
                            <Box className="button">
                              <button>
                                <span
                                  className="btn-txt"
                                  style={{ color: "#4ac8ae" }}
                                >
                                  Learn more
                                </span>
                                <span className="btn-img">
                                  <img src="/icons/vector-blue.svg" />
                                </span>
                              </button>
                            </Box>
                          </Box>
                        </Box>
                      </div>
                      <div className="back" style={{ background: "white" }}>
                        <Typography className={"title"}>
                          Essay brainstorming sessions
                        </Typography>
                        <Typography className={"txt"}>
                          Guidance on Common App, personal statements, and
                          supplemental essays.
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="flip-container">
                    <div className="flipper">
                      <div className="front" style={{ background: "white" }}>
                        <Box className={"content-wrapper"}>
                          <div className="title">
                            <img src="/icons/services-stat.svg" alt="Avatar" />
                            <Typography
                              className={"title-txt"}
                              style={{ color: "black" }}
                            >
                              Recommendation Letters{" "}
                            </Typography>
                          </div>
                          <Box className={"content"}>
                            <Typography
                              className="txt"
                              style={{ color: "black" }}
                            >
                              Get guidance on securing impactful
                              recommendations.
                            </Typography>
                            <Box className="button">
                              <button>
                                <span
                                  className="btn-txt"
                                  style={{ color: "#4ac8ae" }}
                                >
                                  Learn more
                                </span>
                                <span className="btn-img">
                                  <img src="/icons/vector-blue.svg" />
                                </span>
                              </button>
                            </Box>
                          </Box>
                        </Box>
                      </div>
                      <div className="back" style={{ background: "white" }}>
                        <Typography className={"title"}>
                          Professional tone & structure
                        </Typography>
                        <Typography className={"txt"}>
                          A strong recommendation letter can boost your
                          application—let us help craft one that truly
                          represents you!
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
