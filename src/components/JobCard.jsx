import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";

const JobCard = ({ job }) => {
  const [hover, setHover] = useState(false);

  const {
    companyName,
    logoUrl,
    jobRole,
    location,
    minJdSalary,
    maxJdSalary,
    jobDetailsFromCompany,
    minExp,
    maxExp,
  } = job;

  return (
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        m: "5px",
        borderRadius: "20px",
        boxShadow: 3,
        transition: "transform 0.3s",
        transform: hover ? "scale(1.01)" : "scale(1)",
      }}
    >
      <Box sx={{ p: 2, padding: "10px" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Box sx={{ ml: 1, borderRadius: "8px", boxShadow: 3 }}>
            <Typography
              sx={{
                fontSize: "11px",
                padding: "3px",
                display: "flex",
                alignItems: "center",
              }}
              variant="string"
            >
              ⏳ Posted X days ago
            </Typography>
          </Box>
        </Box>

        {/* card details */}

        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            {/* image */}

            <Box sx={{ mr: 2 }}>
              <img src={logoUrl} alt={companyName} style={{ width: "50px" }} />
            </Box>

            {/* company name, role and location */}

            <Box>
              <Box sx={{}}>
                <Typography variant="" component="h3">
                  {companyName}
                </Typography>
                <Typography variant="body1">
                  {jobRole
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // to make first character capital for each word
                    .join(" ")}
                </Typography>
              </Box>
              <Typography variant="body2">
                {location
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Typography>
            </Box>
          </Box>

          {/* salary */}

          <Typography variant="body1" sx={{ mb: 2 }}>
            Estimated Salary: ₹{minJdSalary} - ₹{maxJdSalary} LPA{" "}
            <span aria-label="Estimated by Weekday. Not provided by employer">
              ⚠️
            </span>
          </Typography>

          {/* About Company and the job */}

          <Box>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              About Company:
            </Typography>
            <Box sx={{}}>
              <Typography
                sx={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 60%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, black 60%, transparent 100%)",
                }}
                variant="subtitle2"
              >
                {jobDetailsFromCompany.slice(0, 550)}...
              </Typography>
            </Box>
          </Box>
          {/* <Typography variant="body1" sx={{ mb: 1 }}>
            About Role:
          </Typography>
          <Box sx={{ ml: 2, mb: 2 }}>
            <Typography variant="body2">{jobDetailsFromCompany}</Typography>
          </Box> */}

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{ color: "blue", justifyContent: "center" }}
              variant="body1"
            >
              Show more
            </Typography>
          </Box>

          {/* Experience */}

          <Box sx={{ mt: 1 }}>
            <Typography sx={{ color: "#8b8b8b" }} variant="body1">
              Minimum Experience
            </Typography>
            <Typography variant="string">{minExp} years</Typography>
          </Box>
        </CardContent>

        {/* card over */}
      </Box>

      {/* new box, button */}

      <Box sx={{ p: 3, mt: "0", display: "flex", justifyContent: "center" }}>
        <Button
          variant=""
          sx={{
            borderRadius: "8px",
            backgroundColor: "#55efC4",
            color: "#000",
            fontWeight: "bold",
            padding: "8px 18px",
            width: "100%",
          }}
        >
          ⚡ Easy Apply
        </Button>
      </Box>
    </Card>
  );
};

export default JobCard;
