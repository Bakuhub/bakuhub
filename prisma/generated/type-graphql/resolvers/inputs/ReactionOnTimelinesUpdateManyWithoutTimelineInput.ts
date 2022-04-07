import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/ReactionOnTimelinesCreateManyTimelineInputEnvelope";
import { ReactionOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateOrConnectWithoutTimelineInput";
import { ReactionOnTimelinesCreateWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateWithoutTimelineInput";
import { ReactionOnTimelinesScalarWhereInput } from "../inputs/ReactionOnTimelinesScalarWhereInput";
import { ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput";
import { ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput";
import { ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnTimelinesUpdateManyWithoutTimelineInput", {
  isAbstract: true
})
export class ReactionOnTimelinesUpdateManyWithoutTimelineInput {
  @TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateWithoutTimelineInput], {
    nullable: true
  })
  create?: ReactionOnTimelinesCreateWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateOrConnectWithoutTimelineInput], {
    nullable: true
  })
  connectOrCreate?: ReactionOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput], {
    nullable: true
  })
  upsert?: ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCreateManyTimelineInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionOnTimelinesCreateManyTimelineInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  set?: ReactionOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReactionOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  delete?: ReactionOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput], {
    nullable: true
  })
  update?: ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput], {
    nullable: true
  })
  updateMany?: ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReactionOnTimelinesScalarWhereInput[] | undefined;
}
