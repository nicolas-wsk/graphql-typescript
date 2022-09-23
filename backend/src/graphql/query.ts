import { objectType, arg, stringArg, nonNull } from "nexus";
import { getHero, getHuman, getDroid } from "../data";
import { Character } from "./character";
import { Droid } from "./droid";
import { Episode } from "./episode";
import { Human } from "./human";

const characterArgs = {
  id: nonNull(
    stringArg({
      description: "id of the character",
    })
  ),
};

const heroArgs = {
  episode: nonNull(
    arg({
      type: Episode,
      description: "id of the character episode.",
    })
  ),
};

export const Query = objectType({
  name: "Query",
  definition(t) {
    t.field("getHeroByEpisode", {
      type: Character,
      args: heroArgs,
      resolve: (_, { episode }) => getHero(episode),
    });
    t.field("getHumanById", {
      type: Human,
      args: characterArgs,
      resolve: (_, { id }) => getHuman(id),
    });
    t.field("getDroidById", {
      type: Droid,
      args: characterArgs,
      resolve: (_, { id }) => getDroid(id),
    });
  },
});
