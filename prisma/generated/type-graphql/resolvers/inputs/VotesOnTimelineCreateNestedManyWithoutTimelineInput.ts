import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineCreateManyTimelineInputEnvelope } from "../inputs/VotesOnTimelineCreateManyTimelineInputEnvelope";
import { VotesOnTimelineCreateOrConnectWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateOrConnectWithoutTimelineInput";
import { VotesOnTimelineCreateWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateWithoutTimelineInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnTimelineCreateNestedManyWithoutTimelineInput", {
  isAbstract: true
})
export class VotesOnTimelineCreateNestedManyWithoutTimelineInput {
  @TypeGraphQL.Field(_type => [VotesOnTimelineCreateWithoutTimelineInput], {
    nullable: true
  })
  create?: VotesOnTimelineCreateWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineCreateOrConnectWithoutTimelineInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnTimelineCreateOrConnectWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineCreateManyTimelineInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnTimelineCreateManyTimelineInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput], {
    nullable: true
  })
  connect?: VotesOnTimelineWhereUniqueInput[] | undefined;
}
