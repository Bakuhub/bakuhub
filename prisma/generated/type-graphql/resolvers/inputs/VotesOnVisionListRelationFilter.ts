import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionWhereInput } from "../inputs/VotesOnVisionWhereInput";

@TypeGraphQL.InputType("VotesOnVisionListRelationFilter", {
  isAbstract: true
})
export class VotesOnVisionListRelationFilter {
  @TypeGraphQL.Field(_type => VotesOnVisionWhereInput, {
    nullable: true
  })
  every?: VotesOnVisionWhereInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionWhereInput, {
    nullable: true
  })
  some?: VotesOnVisionWhereInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionWhereInput, {
    nullable: true
  })
  none?: VotesOnVisionWhereInput | undefined;
}
