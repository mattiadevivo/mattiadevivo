import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import EducationEntry from "./education-entry";

// TODO: fix any type in all the file

type Props = {
  entries: any[];
};

const Education = ({ entries }: Props) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2%",
        marginTop: "8px"
      }}
    >
      <Typography variant="h4">Education</Typography>
      <ul>
        {entries.map((entry: any) => (
          <EducationEntry
            description={entry.description}
            startDate={entry.startDate}
            endDate={entry.endDate}
            institute={entry.institute}
            location={entry.location}
            mark={entry.mark}
            title={entry.title}
            key={entry.title}
          ></EducationEntry>
        ))}
      </ul>
    </Paper>
  );
};

export default Education;
export { Education };
