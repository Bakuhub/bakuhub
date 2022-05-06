import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsWhereInput } from "../inputs/ReactionOnThreadsWhereInput";

@TypeGraphQL.InputType("ReactionOnThreadsListRelationFilter", {
  isAbstract: true
})
export class ReactionOnThreadsListRelationFilter {
  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput, {
    nullable: true
  })
  every?: ReactionOnThreadsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput, {
    nullable: true
  })
  some?: ReactionOnThreadsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput, {
    nullable: true
  })
  none?: ReactionOnThreadsWhereInput | undefined;
}
