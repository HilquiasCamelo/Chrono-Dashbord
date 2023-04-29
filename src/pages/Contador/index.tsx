import { Play } from "phosphor-react";

import {
  CountContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from "./style";

export const Contador = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em :</label>
          <input id="task"></input>
          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount"></input>
          <span>minutos</span>
        </FormContainer>

        <CountContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  );
};
