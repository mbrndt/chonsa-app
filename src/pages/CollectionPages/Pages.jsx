import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecipeCollection } from "./RecipesCollection";
import { Cuisine } from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";

function Pages() {
  return (
    <Routes>
      <Route
        path="src/pages/CollectionPages/RecipesCollection.js"
        element={<RecipeCollection />}
      />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
