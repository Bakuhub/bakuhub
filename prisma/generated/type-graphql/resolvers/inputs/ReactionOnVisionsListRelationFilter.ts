import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsWhereInput } from "../inputs/ReactionOnVisionsWhereInput";

@TypeGraphQL.InputType("ReactionOnVisionsListRelationFilter", {
  isAbstract: true
})
export class ReactionOnVisionsListRelationFilter {
  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput, {
    nullable: true
  })
  every?: ReactionOnVisionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput, {
    nullable: true
  })
  some?: ReactionOnVisionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput, {
    nullable: true
  })
  none?: ReactionOnVisionsWhereInput | undefined;
}
