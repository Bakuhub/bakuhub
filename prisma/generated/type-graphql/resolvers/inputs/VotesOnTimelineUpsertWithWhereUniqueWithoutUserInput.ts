import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineCreateWithoutUserInput } from "../inputs/VotesOnTimelineCreateWithoutUserInput";
import { VotesOnTimelineUpdateWithoutUserInput } from "../inputs/VotesOnTimelineUpdateWithoutUserInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnTimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnTimelineUpdateWithoutUserInput, {
    nullable: false
  })
  update!: VotesOnTimelineUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => VotesOnTimelineCreateWithoutUserInput, {
    nullable: false
  })
  create!: VotesOnTimelineCreateWithoutUserInput;
}
