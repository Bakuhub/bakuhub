import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateNestedOneWithoutVotesOnTimelineInput } from "../inputs/TimelineCreateNestedOneWithoutVotesOnTimelineInput";
import { UserCreateNestedOneWithoutVotesOnTimelineInput } from "../inputs/UserCreateNestedOneWithoutVotesOnTimelineInput";

@TypeGraphQL.InputType("VotesOnTimelineCreateInput", {
  isAbstract: true
})
export class VotesOnTimelineCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnTimelineInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutVotesOnTimelineInput;

  @TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutVotesOnTimelineInput, {
    nullable: false
  })
  timeline!: TimelineCreateNestedOneWithoutVotesOnTimelineInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  vote?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
