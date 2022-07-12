import { gql } from "@apollo/client";
import Server from "./Server";

export const GET_ALL_SPELLS = gql`
  query GetSpells($limit: Int) {
    spells(limit: $limit) {
      name
      url
      level
      index
      components
      attack_type
      casting_time
      duration
      range
      area_of_effect {
        type
        size
      }
      damage {
        damage_type {
          name
        }
      }
      classes {
        name
        index
      }
    }
  }
`;

export const GET_ALL_SPELL_CLASSES = gql`
  query GetSpellClasses {
    classes {
      name
      index
    }
  }
`;

export const GET_SPELL_DETAILS = async (spellId: string) => {
  try {
    const resp = await Server.get(`/spells/${spellId}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
