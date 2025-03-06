import { Stack, Box } from "@mui/material";
import Typography from "@mui/joy/Typography";
import "../../../css/aboutUs.css";

export default function Benefits() {
  return (
    <div className={"benefits-frame"}>
      <Stack className={"benefits-container"}>
        <Stack className={"benefits-texts"}>
          <Typography className={"title"}>Our Benefits</Typography>

          <Typography className={"topic"}>
            By Joining{" "}
            <span style={{ color: "#FF9B26" }}>College Counseling</span>{" "}
            Platform, One Can Avail a Lot Of Benefits.
          </Typography>
          <Typography className={"info"}>
            Explore our expert-guided college application platform to access top
            universities, craft compelling applications, and take the next step
            toward <br /> your academic future.
          </Typography>
        </Stack>

        <Stack className={"benefits-cards"}>
          <Stack className={"card-row"}>
            <Stack className={"card"}>
              <Box
                className={"number"}
                style={{
                  backgroundImage: `url('/img/benefits-ellipse8.svg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                01
              </Box>
              <Typography className={"title"}>University Matching</Typography>
              <Typography className={"info"}>
                Get matched with the best universities based on your profile and
                goals.
              </Typography>
            </Stack>

            <Stack className={"card"} style={{ background: "none" }}>
              <Box
                className={"number"}
                style={{
                  backgroundImage: `url('/img/benefits-ellipse6.svg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                02
              </Box>
              <Typography className={"title"}>Essay Assistance </Typography>
              <Typography className={"info"}>
                Receive professional help in crafting compelling application
                essays.
              </Typography>
            </Stack>

            <Stack className={"card"}>
              <Box
                className={"number"}
                style={{
                  backgroundImage: `url('/img/benefits-ellipse8.svg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                03
              </Box>
              <Typography className={"title"}>Recommendation Help</Typography>
              <Typography className={"info"}>
                Learn how to request and secure impactful recommendation
                letters.
              </Typography>
            </Stack>
          </Stack>

          <Stack className={"card-row"}>
            <Stack className={"card"} style={{ background: "none" }}>
              <Box
                className={"number"}
                style={{
                  backgroundImage: `url('/img/benefits-ellipse6.svg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                04
              </Box>
              <Typography className={"title"}>Resume Building</Typography>
              <Typography className={"info"}>
                Build a standout resume to highlight your academic and
                extracurricular achievements.
              </Typography>
            </Stack>

            <Stack className={"card"} >
              <Box
                className={"number"}
                style={{
                  backgroundImage: `url('/img/benefits-ellipse8.svg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                05
              </Box>
              <Typography className={"title"}>Deadline Tracking</Typography>
              <Typography className={"info"}>
                Stay organized with reminders for important dates and
                requirements.
              </Typography>
            </Stack>

            <Stack className={"card"} style={{ background: "none" }}>
              <Box
                className={"number"}
                style={{
                  backgroundImage: `url('/img/benefits-ellipse6.svg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                06
              </Box>
              <Typography className={"title"}>Scholarship Guidance</Typography>
              <Typography className={"info"}>
                Discover funding opportunities to support your education.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
