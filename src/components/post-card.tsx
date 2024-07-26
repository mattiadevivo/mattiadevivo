import {
  Card,
  CardContent,
  Button,
  CardActions,
  Typography,
  CardMedia,
} from "@mui/material";
import { Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

type Props = {
  title: string;
  date: string;
  link: string;
  imageData: IGatsbyImageData;
};

const PostCard = (props: Props) => {
  const image = getImage(props.imageData);
  return (
    <Card
      elevation={6}
      sx={{
        alignSelf: "stretch",
      }}
    >
      {image && (
        <CardMedia
          sx={{ padding: 1, display: "flex", justifyContent: "center" }}
        >
          <GatsbyImage image={image} alt={props.title + " image"} />
        </CardMedia>
      )}
      <CardContent>
        <Typography variant="h6" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Posted {props.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={props.link}>
          <Button size="small">{props.title}</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PostCard;
export { PostCard };
