import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineCreateWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateWithoutTimelineInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnTimelineCreateOrConnectWithoutTimelineInput", {
  isAbstract: true
})
export class VotesOnTimelineCreateOrConnectWithoutTimelineInput {
  @TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnTimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnTimelineCreateWithoutTimelineInput, {
    nullable: false
  })
  create!: VotesOnTimelineCreateWithoutTimelineInput;
}
