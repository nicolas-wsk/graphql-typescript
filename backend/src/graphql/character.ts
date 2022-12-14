import { interfaceType } from "nexus";
import { getFriends } from "../data";
import { Episode } from "./episode";

export const Character = interfaceType({
  name: "Character",
  resolveType(character) {
    return character.type;
  },
  definition: (t) => {
    t.string("id", { description: "The id of the character" });
    t.string("name", { description: "The name of the character" });
    t.nonNull.list.field("friends", {
      type: Character,
      description:
        "The friends of the character, or an empty list if they have none.",
      resolve: (character) => Promise.all(getFriends(character)) || [],
    });
    t.nonNull.list.field("appearsIn", {
      type: Episode,
      description: "Which movies they appear in.",
      resolve: (o) => o.appears_in || [],
    });
  },
});
