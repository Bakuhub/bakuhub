import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/ReactionOnTimelinesCreateManyTimelineInputEnvelope";
import { ReactionOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateOrConnectWithoutTimelineInput";
import { ReactionOnTimelinesCreateWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateWithoutTimelineInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnTimelinesCreateNestedManyWithoutTimelineInput", {
  isAbstract: true
})
export class ReactionOnTimelinesCreateNestedManyWithoutTimelineInput {
  @TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateWithoutTimelineInput], {
    nullable: true
  })
  create?: ReactionOnTimelinesCreateWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateOrConnectWithoutTimelineInput], {
    nullable: true
  })
  connectOrCreate?: ReactionOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCreateManyTimelineInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionOnTimelinesCreateManyTimelineInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionOnTimelinesWhereUniqueInput[] | undefined;
}
