import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineUserIdTimelineIdCompoundUniqueInput } from "../inputs/VotesOnTimelineUserIdTimelineIdCompoundUniqueInput";

@TypeGraphQL.InputType("VotesOnTimelineWhereUniqueInput", {
  isAbstract: true
})
export class VotesOnTimelineWhereUniqueInput {
  @TypeGraphQL.Field(_type => VotesOnTimelineUserIdTimelineIdCompoundUniqueInput, {
    nullable: true
  })
  userId_timelineId?: VotesOnTimelineUserIdTimelineIdCompoundUniqueInput | undefined;
}
