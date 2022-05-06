import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineWhereInput } from "../inputs/VotesOnTimelineWhereInput";

@TypeGraphQL.InputType("VotesOnTimelineListRelationFilter", {
  isAbstract: true
})
export class VotesOnTimelineListRelationFilter {
  @TypeGraphQL.Field(_type => VotesOnTimelineWhereInput, {
    nullable: true
  })
  every?: VotesOnTimelineWhereInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineWhereInput, {
    nullable: true
  })
  some?: VotesOnTimelineWhereInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineWhereInput, {
    nullable: true
  })
  none?: VotesOnTimelineWhereInput | undefined;
}
