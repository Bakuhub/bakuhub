import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineUpdateWithoutUserInput } from "../inputs/VotesOnTimelineUpdateWithoutUserInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnTimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnTimelineUpdateWithoutUserInput, {
    nullable: false
  })
  data!: VotesOnTimelineUpdateWithoutUserInput;
}
