import React, { FC } from "react";
import { DataTypes } from "../../types/data.types";
import { CardStyles } from "./card.styles";

const Card: FC<DataTypes> = ({ character }) => {
  return (
    <div key={character.id} className={CardStyles.base}>
      <div>
        <img
          className={CardStyles.image}
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className={CardStyles.container}>
        <p className={CardStyles.title}>{character.name}</p>
        <p className={CardStyles.sub}>Species:</p>
        <p className={CardStyles.label}> {character.species}</p>
        <p className={CardStyles.sub}>Status:</p>
        <p className={CardStyles.label}> {character.status}</p>
        <p className={CardStyles.sub}>Origen:</p>
        <p className={CardStyles.label}> {character.origin.name}</p>
      </div>
    </div>
  );
};

export default Card;
