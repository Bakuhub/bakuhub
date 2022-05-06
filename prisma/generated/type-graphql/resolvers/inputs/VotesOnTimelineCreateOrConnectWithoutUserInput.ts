import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineCreateWithoutUserInput } from "../inputs/VotesOnTimelineCreateWithoutUserInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnTimelineCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class VotesOnTimelineCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnTimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnTimelineCreateWithoutUserInput, {
    nullable: false
  })
  create!: VotesOnTimelineCreateWithoutUserInput;
}
