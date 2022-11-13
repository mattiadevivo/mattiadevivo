import {
  Card,
  CardContent,
  Button,
  CardActions,
  Typography,
} from "@mui/material";
import { Link } from "gatsby";
import React from "react";

type Props = {
  title: string;
  date: string;
  link: string;
};

const PostCard = (props: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Posted {props.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={props.link}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PostCard;
export { PostCard };
