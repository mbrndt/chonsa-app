import React from "react";
import { Popular } from "../../components/Popular";
import { Veggie } from "../../components/Veggie";

export const RecipeCollection = () => {
  return (
    <div>
      <div>
        <Veggie />
        <Popular />
      </div>
    </div>
  );
};
