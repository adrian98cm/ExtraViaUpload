import React from "react";
import styled from "styled-components";

import IngredientsList from "./IngredientsList";
import AddIngredient from "./AddIngredient";
import RecipesList from "./RecipesList";
import RecipeDetails from "./RecipeDetails";

export default () => {
  return (
    <ViewRecipes>
      <RecipesList />
      <RecipeDetails/>
    </ViewRecipes>
  );
};

const ViewRecipes = styled.div`
  display: flex;
  flex-direction: row;
`;
