import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineUpdateWithoutTimelineInput } from "../inputs/VotesOnTimelineUpdateWithoutTimelineInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput", {
  isAbstract: true
})
export class VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput {
  @TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnTimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnTimelineUpdateWithoutTimelineInput, {
    nullable: false
  })
  data!: VotesOnTimelineUpdateWithoutTimelineInput;
}
