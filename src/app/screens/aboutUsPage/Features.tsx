import { Box, Stack } from "@mui/material";
import Typography from "@mui/joy/Typography";
import "../../../css/aboutUs.css";

export default function Features() {
  return (
    <div className={"features-frame"}>
      <div className="container">
        <Stack className={"features-container"}>
          <Box className={"features-box"}>
            <img
                className="feature-image"
                src="/img/features.png"
                alt="Universities"
            />
          </Box>
          <Stack className="features-texts">
            <Typography className={"title"}>Features</Typography>
            <Typography className={"topic"}>
              We are always working to provide you best  the features in all aspects.
            </Typography>
            <Typography className={"info"}>
              At College Counseling, our mission is to help students gain clarity
              on their academic goals, stay committed to their ambitions, and
              build confidence throughout the university application journey.
            </Typography>

            <Typography className={"info"}>
              You will find every little thing on the internet in just a click of
              hand, but here we admire that without knowledge and practice the
              internet may even also fail you in your life.
            </Typography>
            <Box className="button">
              <button>
                <span className="btn-txt"> Learn More </span>
                <span className="btn-img">
                <img src="/img/arrow-right.png" />
              </span>
              </button>
            </Box>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}
