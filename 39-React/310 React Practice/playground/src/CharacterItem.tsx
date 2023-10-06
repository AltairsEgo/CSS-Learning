import React from "react";
import { characterStats } from "./character-stats";
import { CharacterDetails } from "./types";
import styles from "./CharacterItem.module.css";
import { characterSheetFields } from "./character-sheet-fields";

const CharacterItem: React.FC<CharacterDetails> = ({ ...characterStats }) => {
  return (
    <React.Fragment>
      <div className={styles.characterItemContainer}>
        <p className={styles.characterName}>
          {characterSheetFields.Name + characterStats.characterName}
        </p>
        <div className={styles.characterPortrait}></div>
        <div className={styles.abilityScores}>
          <span>
            <p>{characterSheetFields.Dexterity + characterStats.dexterity}</p>
            <p>{characterSheetFields.Strength + characterStats.strength}</p>
            <p>
              {characterSheetFields.Constituion + characterStats.constitution}
            </p>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export { CharacterItem };
