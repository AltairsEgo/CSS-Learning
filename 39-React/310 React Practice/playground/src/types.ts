interface CharacterDetails extends CharacterStats {
  characterName: string;
}

interface CharacterStats {
  dexterity: number;
  strength: number;
  constitution: number;
}

// Continue to specify text types for the stats and other stuff.

export type { CharacterDetails };
