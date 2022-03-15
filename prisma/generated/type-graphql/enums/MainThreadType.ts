import * as TypeGraphQL from "type-graphql";

export enum MainThreadType {
  Timeline = "Timeline",
  Premise = "Premise",
  Vision = "Vision"
}
TypeGraphQL.registerEnumType(MainThreadType, {
  name: "MainThreadType",
  description: undefined,
});
