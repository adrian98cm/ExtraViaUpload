/*

import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { sessionState } from "../recoil/atoms";
import { OK, Error, Title } from "../style/styles";

const ADD_MUTATION = gql`
  mutation addRecipe($userName: String!, $pwd: String!) {
    addRecipe(token: $token, id:$id: $title, description: $description, step1: $step1, step2: $step2, step3: $step3, fileinput: $fileinput) {
      _id
      token
      title
      description
      step1
      step2
      step3
      fileinput
    }
  }
`;

export default () => {
  const [session] = useRecoilState(sessionState);
  const [errorMessage, setErrorMessage] = useState("");
  const [addRecipe, { data }] = useMutation(ADD_MUTATION);

  const addMutation = (token, id, title, description, step1, step2, step3, fileinput ) => {
    addRecipe({
      variables: { token, id, title, description, step1, step2, step3, fileinput },
    });
  };


  return (
    <AddRecipeData>
      <Title>Añadir receta</Title>
      {errorMessage !== "" ? <Error>{errorMessage}</Error> : null}
      <Input id="title" type="text" placeholder="Titulo"></Input>
      <Input id="description" type="text" placeholder="Descripcion"></Input>
      <Input id="step1" type="text" placeholder="Paso 1"></Input>
      <Input id="step2" type="text" placeholder="Paso 2"></Input>
      <Input id="step3" type="text" placeholder="Paso 3"></Input>
      <Button
              onClick={() => {
                addMutation(
                  document.getElementById("title").value,
                  document.getElementById("description").value,
                  document.getElementById("step1").value,
                  document.getElementById("step2").value,
                  document.getElementById("step3").value,
                );
              }}
            >
              Guardar receta
            </Button>

    </AddRecipeData>
  );
};

const AddRecipeData = styled.div`
  color: #333333;
  margin: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border: 1px solid #333;
  height: 30px;
  width: 500px;
`;

const Button = styled.button`
  color: black;
  font-weight: bold;
  height: 30px;
  width: 500px;
  border: 1px solid #333;
  &:hover {
    background-color: #bbbbbb;
    cursor: pointer;
  }
`;


*/