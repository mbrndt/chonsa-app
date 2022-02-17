import { React } from "react";
import { Link } from "react-router-dom";
import { Paper, Text } from "@mantine/core";
import "./CollectionBoxes.css";

export const CollectionBoxes = () => {
  return (
    <div className="Boxes">
      <Paper
        component={Link}
        to="src/pages/contact.js"
        className="Card"
        padding="xl"
        shadow="xs"
      >
        <Text>recipe</Text>
      </Paper>

      <Paper className="Card" padding="xl" shadow="xs">
        <Text>study notes</Text>
      </Paper>

      <Paper className="Card" padding="xl" shadow="xs">
        <Text>book library</Text>
      </Paper>

      <Paper className="Card" padding="xl" shadow="xs">
        <Text>general notes</Text>
      </Paper>
    </div>
  );
};
