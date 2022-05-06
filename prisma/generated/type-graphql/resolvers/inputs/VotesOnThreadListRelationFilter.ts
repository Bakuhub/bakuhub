import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadWhereInput } from "../inputs/VotesOnThreadWhereInput";

@TypeGraphQL.InputType("VotesOnThreadListRelationFilter", {
  isAbstract: true
})
export class VotesOnThreadListRelationFilter {
  @TypeGraphQL.Field(_type => VotesOnThreadWhereInput, {
    nullable: true
  })
  every?: VotesOnThreadWhereInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadWhereInput, {
    nullable: true
  })
  some?: VotesOnThreadWhereInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadWhereInput, {
    nullable: true
  })
  none?: VotesOnThreadWhereInput | undefined;
}
