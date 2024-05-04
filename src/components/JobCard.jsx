import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const JobCard = ({ job }) => {
  const {
    companyName,
    logoUrl,
    jobRole,
    location,
    minExp,
    maxExp,
    minJdSalary,
    maxJdSalary,
    jobDetailsFromCompany,
  } = job;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<img src={logoUrl} alt={companyName} />}
        title={companyName}
        subheader={`${jobRole} - ${location}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Estimated Salary: {minJdSalary} - {maxJdSalary}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          About Company:
          {jobDetailsFromCompany.slice(0, 100)}... [Show more]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Minimum Experience: {minExp} - {maxExp} years
        </Typography>
      </CardContent>
      <IconButton aria-label="show more" size="large">
        <ExpandMoreIcon />
      </IconButton>
      <Button variant="success">Easy Apply</Button>
    </Card>
  );
};

export default JobCard;
