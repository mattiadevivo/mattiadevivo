import { Avatar, Skeleton, Stack, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React, { Component } from "react";

type Props = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: any; // TODO: fix
  works: any; // TOOD: fix
};

const ExperienceEntry = (props: Props) => {
  return (
    <li>
      <h5>
        {props.position} -{" "}
        <span style={{ color: "#555555" }}>{props.company}</span>
      </h5>
      <h6>
        {props.startDate} - {props.endDate ?? "Present"}, {props.location}
      </h6>
      <p>{props.description.description}</p>
      {props.works !== null
        ? props.works.map((item: any) => (
            <Stack key={item.key} direction="row" spacing={2}>
              <Skeleton variant="circular">
                <Avatar />
              </Skeleton>
              <h6 style={{ marginLeft: 8 }}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </h6>
            </Stack>
          ))
        : null}
    </li>
  );
};

export default ExperienceEntry;
export { ExperienceEntry };
