import React from "react";
import { Paper, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export const RecipeCollection = () => {
  return (
    <div>
      <Paper
        component={Link}
        to="src/pages/contact.js"
        className="Card"
        padding="xl"
        shadow="xs"
      >
        <Text>recipe</Text>
      </Paper>
    </div>
  );
};
