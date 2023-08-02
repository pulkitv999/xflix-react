import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Videocard.css";
import { useHistory } from "react-router";

const Videocard = ({ video }) => {
  const history = useHistory();
  return (
    <Card
      onClick={() => history.push(`/video/${video._id}`)}
      className="videocard"
      sx={{
        maxWidth: 345,
        backgroundColor: "#181818",
        borderColor: "#181818",
        boxShadow: 0,
      }}
    >
      <CardMedia
        component="img"
        height="70%"
        image={video.previewImage}
        alt="green iguana"
      />
      <CardContent sx={{ backgroundColor: "#181818", padding: 0 }}>
        <Typography
          align="start"
          sx={{
            color: "white",
            mx: 0.5,
            fontSize: 20,
            padding: 0,
            margin: 0,
          }}
          variant="p"
          component="div"
        >
          {video.title}
        </Typography>
        <Typography
          sx={{ color: "white" }}
          align="start"
          padding={0}
          variant="body2"
          color="text.secondary"
        >
          {video.releaseDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Videocard;
