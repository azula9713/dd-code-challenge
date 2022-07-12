interface IDamageType {
  __typename: string;
  damage_type: {
    name: string;
  };
}

export interface ISpell {
  name: string;
  index: string;
  duration: string;
  damage: IDamageType;
  classes: [
    {
      index: string;
      name: string;
    }
  ];
  attack_type?: string;
}

export interface ISpellDetails extends ISpell {
  desc: [string];
  material: string;
  range: string;
  higher_level: [string];
  components: [string];
  casting_time: string;
}
