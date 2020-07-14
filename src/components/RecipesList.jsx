import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import styled from "styled-components";
import { OK, Error, Title } from "../style/styles";
import { recipeState } from "../recoil/atoms";
import { useRecoilState } from "recoil";


const RECIPES_LIST_QUERY = gql`
  {
    recipes {
      _id
      title
    }
  }
`;
export default () => {
    const [recipeData, setRecipeData] = useRecoilState(recipeState);

  const { loading, error, data } = useQuery(RECIPES_LIST_QUERY);
  if (loading) return <p>Cargando lista de recetas...</p>;
  if (error) return <p>Error cargando la lista de recetas...</p>;

  return (
    <RecipesList>
      <Title>Lista de recetas</Title>
      {data.recipes.map(({ _id, title }) => (
        <Recipe onClick={() => setRecipeData(_id)} key={_id}>{title}</Recipe>
       
      ))}
    </RecipesList>
  );

  console.log(recipeData);

};


const RecipesList = styled.div`
  color: #333333;
  margin: 2em;
  display: flex;
  flex-direction: column;
`;

const Recipe = styled.div`
  margin-left: 1em;
  &:hover {
    cursor: pointer;
  }
`;
