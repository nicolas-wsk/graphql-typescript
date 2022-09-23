import { makeSchema, nullabilityGuardPlugin } from "nexus";
import * as path from "path";
import * as allTypes from "./graphql";

/** Finally, we construct our schema (whose starting query type is the query type we defined above) and export it. */
export const schema = makeSchema({
  types: allTypes,
  outputs: {
    schema: path.join(__dirname, "./__generated__/schema.graphql"),
    typegen: path.join(__dirname, "./__generated__/typegen.ts"),
  },
  plugins: [
    nullabilityGuardPlugin({
      shouldGuard: true,
      fallbackValues: {
        String: () => "",
        // ID: () => "MISSING_ID",
        Boolean: () => true,
      },
    }),
  ],
  sourceTypes: {
    modules: [
      {
        module: path.join(__dirname, "types", "backingTypes.ts"),
        alias: "swapi",
      },
    ],
  },
  contextType: {
    module: path.join(__dirname, "types", "context.ts"),
    export: "ContextType",
  },
  // prettierConfig: path.join(__dirname, "../.prettierrc.js"),
  features: {
    abstractTypeStrategies: {
      resolveType: true,
    },
  },
});
