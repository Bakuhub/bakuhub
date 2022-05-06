import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput } from "../inputs/ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput";

@TypeGraphQL.InputType("ReactionOnTimelinesWhereUniqueInput", {
  isAbstract: true
})
export class ReactionOnTimelinesWhereUniqueInput {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput, {
    nullable: true
  })
  userId_timelineId?: ReactionOnTimelinesUserIdTimelineIdCompoundUniqueInput | undefined;
}
