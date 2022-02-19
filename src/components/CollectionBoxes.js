import { React } from "react";
import { Link } from "react-router-dom";
import { Paper, Text } from "@mantine/core";
import "./CollectionBoxes.css";

export const CollectionBoxes = () => {
  return (
    <div className="Boxes">
      <Paper
        component={Link}
        to="src/pages/CollectionPages/RecipesCollection.js"
        className="Card"
        padding="xl"
        shadow="xs"
      >
        <Text>recipe</Text>
      </Paper>

      <Paper
        component={Link}
        to="src/pages/CollectionPages/StudyNotes.js"
        className="Card"
        padding="xl"
        shadow="xs"
      >
        <Text>study notes</Text>
      </Paper>

      <Paper
        component={Link}
        to="src/pages/CollectionPages/BookCollection.js"
        className="Card"
        padding="xl"
        shadow="xs"
      >
        <Text>book library</Text>
      </Paper>

      <Paper
        component={Link}
        to="src/pages/CollectionPages/GeneralNotes.js"
        className="Card"
        padding="xl"
        shadow="xs"
      >
        <Text>general notes</Text>
      </Paper>
    </div>
  );
};
