import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseWhereInput } from "../inputs/VotesOnPremiseWhereInput";

@TypeGraphQL.InputType("VotesOnPremiseListRelationFilter", {
  isAbstract: true
})
export class VotesOnPremiseListRelationFilter {
  @TypeGraphQL.Field(_type => VotesOnPremiseWhereInput, {
    nullable: true
  })
  every?: VotesOnPremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseWhereInput, {
    nullable: true
  })
  some?: VotesOnPremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseWhereInput, {
    nullable: true
  })
  none?: VotesOnPremiseWhereInput | undefined;
}
