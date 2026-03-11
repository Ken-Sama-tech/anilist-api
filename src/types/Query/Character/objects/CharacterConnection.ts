import type { PageInfo } from "../../Page";
import type { Character, CharacterEdge } from "../";

export type CharacterConnection = {
  edges: CharacterEdge[];
  nodes: Character;
  pageInfo: PageInfo;
};
