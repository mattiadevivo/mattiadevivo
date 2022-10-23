import React, { Component } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; // RichText interpreter
import { Typography } from "@mui/material";

type Props = {
  title: string;
  institute: string;
  startDate: string | null;
  endDate: string | null;
  location: string;
  mark: number | null;
  description: string;
};

const EducationEntry = (props: Props) => {
  return (
    <li>
      <Typography variant="h5">
        {props.title} -
        <span style={{ color: "#555555" }}> {props.institute}</span>
      </Typography>
      <Typography>
        {props.startDate ?? null}
        {props.startDate !== null ? " - " : null}
        {props.endDate ?? "Present"}, {props.location}
      </Typography>
      <Typography>
        {props.mark != null ? <p>Mark: {props.mark}</p> : null}
      </Typography>
      <Typography>{props.description ?? null}</Typography>
    </li>
  );
};

export default EducationEntry;
export { EducationEntry };
