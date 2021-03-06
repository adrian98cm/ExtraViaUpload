import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { sessionState, bodyState } from "../recoil/atoms";
import { OK, Error, Title } from "../style/styles";

const SINGIN_MUTATION = gql`
  mutation signin($userName: String!, $pwd: String!) {
    signin(userName: $userName, pwd: $pwd) {
      userName,
      _id
    }
  }
`;

export default () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [body, setBody] = useRecoilState(bodyState);
    const [singinMutation, {data}] = useMutation(SINGIN_MUTATION, {
        onError(error){
            console.log("REGISTRATION ERROR");
            setErrorMessage("Error en el registro");

        }
    });

    const register = (userName, pwd, pwd2) => {
        if(pwd===pwd2)
        {singinMutation({
            variables: { userName, pwd}
        });}else{
            console.log("CONTRASEÑAS NO COINCIDEN");

            setErrorMessage("Las contraseñas no coinciden");

        }
    };

    if(data){
        setBody("Login");
    }

    return(
        <Singin>
            <Title>Sign In</Title>
            {errorMessage !== "" ? <Error>{errorMessage}</Error>: null}
            <Singin>
                <Input
                id="userName"
                type="text"
                placeholder="Nombre de usuario"
                >
                </Input>
                <Input id="pwd" type="password" placeholder="Contraseña"></Input>
                <Input id="pwd2" type="password" placeholder="Repita la contraseña"></Input>

                <Button
                onClick={() => {
                     register(
                            document.getElementById("userName").value,
                            document.getElementById("pwd").value,
                            document.getElementById("pwd2").value,

                            )
                   
                   
                }}>
                Enviar
                </Button>
          </Singin>
        </Singin>
    )
};

const Singin = styled.div`
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