import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesWhereInput } from "../inputs/ReactionOnTimelinesWhereInput";

@TypeGraphQL.InputType("ReactionOnTimelinesListRelationFilter", {
  isAbstract: true
})
export class ReactionOnTimelinesListRelationFilter {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput, {
    nullable: true
  })
  every?: ReactionOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput, {
    nullable: true
  })
  some?: ReactionOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput, {
    nullable: true
  })
  none?: ReactionOnTimelinesWhereInput | undefined;
}
