import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineCreateManyUserInputEnvelope } from "../inputs/VotesOnTimelineCreateManyUserInputEnvelope";
import { VotesOnTimelineCreateOrConnectWithoutUserInput } from "../inputs/VotesOnTimelineCreateOrConnectWithoutUserInput";
import { VotesOnTimelineCreateWithoutUserInput } from "../inputs/VotesOnTimelineCreateWithoutUserInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnTimelineCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class VotesOnTimelineCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [VotesOnTimelineCreateWithoutUserInput], {
    nullable: true
  })
  create?: VotesOnTimelineCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnTimelineCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnTimelineCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput], {
    nullable: true
  })
  connect?: VotesOnTimelineWhereUniqueInput[] | undefined;
}
