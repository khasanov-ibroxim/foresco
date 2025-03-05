import { Box, Stack } from "@mui/material";
import Typography from "@mui/joy/Typography";
import "../../../css/aboutUs.css";

export default function About() {
  return (
    <div className={"about-frame"}>
      <Stack className={"about-container"}>
        <Stack className="about-texts">
          <Typography className={"title"}>About Us</Typography>
          <Typography className={"topic"}>
            <span style={{ color: "#FF9B26" }}>College Counseling</span>{" "}
            providing students worldwide with the best opportunities to plan
            their future and make informed decisions.{" "}
          </Typography>
          <Typography className={"info"}>
            College Counseling is a leading college application platform in
            Uzbekistan, dedicated to helping students craft compelling essays,
            recommendation letters, and resumes. Founded in 2022, we are
            passionate about guiding students through the application process,
            ensuring they present their best selves to universities.
          </Typography>
          <Box className="button">
            <button>
              <span className="btn-txt">Join us</span>
              <span className="btn-img"><img src="/img/arrow-right.png"  /></span>
            </button>
          </Box>
        </Stack>

        <Stack className="about-images">
          <img className="first-img" src="/img/aboutSection-blackman.png" />
          <img className="second-img" src="/img/aboutSection-laptop.png" alt="Universities" />
        </Stack>
      </Stack>
    </div>
  );
}
