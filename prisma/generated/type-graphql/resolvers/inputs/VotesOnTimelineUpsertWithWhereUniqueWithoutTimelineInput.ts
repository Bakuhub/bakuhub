import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineCreateWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateWithoutTimelineInput";
import { VotesOnTimelineUpdateWithoutTimelineInput } from "../inputs/VotesOnTimelineUpdateWithoutTimelineInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput", {
  isAbstract: true
})
export class VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput {
  @TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnTimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnTimelineUpdateWithoutTimelineInput, {
    nullable: false
  })
  update!: VotesOnTimelineUpdateWithoutTimelineInput;

  @TypeGraphQL.Field(_type => VotesOnTimelineCreateWithoutTimelineInput, {
    nullable: false
  })
  create!: VotesOnTimelineCreateWithoutTimelineInput;
}
