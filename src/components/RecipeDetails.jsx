import React from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import styled from "styled-components";
import { OK, Error, Title } from "../style/styles";
import { useRecoilState } from "recoil";
import { recipeState } from "../recoil/atoms";



const RECIPE_QUERY = gql`
  query Recipe($id: ID!) {
    recipe(id: $id) {
        title
  description
  
  ingredients{
    name
  }
  steps{
    description
  }
      
    }
  }
`;

export default () => {
    const [recipeData] = useRecoilState(recipeState);

  const [recipeQuery, { loading, error, data }] = useLazyQuery(RECIPE_QUERY);
  if (loading) return <p>Cargando receta...</p>;
    if (error) return <p>Error cargando la receta</p>;

    const recipe = (recipeData) => {
        recipeQuery({
            variables: {
                id: "5f0d563866138e1271f4d6cd"
            }
        });

    };
   
  return (
      data?
    <RecipeDetails>
      <p>Titulo: {data.recipe.title}</p>
      <p>Fecha: {data.recipe.date}</p>
      <p>Descripción: {data.recipe.description}</p>
  <p>Ingredientes: {data.recipe.ingredients.map((elem)=>{return<p>- {elem.name}</p>})}</p>    
  <p>Pasos: {data.recipe.steps.map((elem)=>{return<p>- {elem.description}</p>})}</p>    

    </RecipeDetails>
    :
    <RecipeDetails>
    <p>ID Receta seleccionada: {recipeData}</p>
      <button onClick={(e) => {   recipeQuery({
          variables: {
              id: recipeData
          }
      });}}>Mostrar detalles</button>
    

  </RecipeDetails>
  );
 
};

const RecipeDetails = styled.div`
  color: #333333;
  margin: 2em;
  display: flex;
  flex-direction: column;
`;

const Ingredient = styled.div`
  margin-left: 1em;
`;
