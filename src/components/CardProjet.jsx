import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import { gradientBgCards } from "../styles/variables";
// import skillsData from "../data/skills.json";

const CardProjet = ({ title, description, image, onClick }) => {
  // Mapper les skills vers leurs icônes correspondantes
  // const skillIcons = skills.map((skill) => {
  //   const iconData = skillsData.find((i) => i.name === skill);
  //   return iconData ? `/icons/${iconData.icon}` : null;
  // });

  return (
    <Card
      sx={{
        maxWidth: 350,
        width: 350,
        // height: 260,
        borderRadius: 3,
        boxShadow: 3,
        m: 1,
        color: "#fff",
        background: gradientBgCards,
        // border: "2px solid white",
      }}
    >
      {/* CardActionArea permet de rendre toute la carte cliquable */}
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={`Image du projet ${title}`}
          sx={{ borderRadius: 3, objectFit: "cover", height: 250 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: "#fff",
            }}
          >
            {description}
          </Typography>

          {/* <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
            {skillIcons.map(
              (icon, index) =>
                icon && (
                  <img
                    key={index}
                    src={icon}
                    alt={`Icône ${skills[index]}`}
                    style={{ width: 24, height: 24 }}
                  />
                )
            )}
          </Box> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProjet;
