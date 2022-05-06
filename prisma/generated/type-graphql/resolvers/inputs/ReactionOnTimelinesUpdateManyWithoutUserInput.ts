import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesCreateManyUserInputEnvelope } from "../inputs/ReactionOnTimelinesCreateManyUserInputEnvelope";
import { ReactionOnTimelinesCreateOrConnectWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateOrConnectWithoutUserInput";
import { ReactionOnTimelinesCreateWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateWithoutUserInput";
import { ReactionOnTimelinesScalarWhereInput } from "../inputs/ReactionOnTimelinesScalarWhereInput";
import { ReactionOnTimelinesUpdateManyWithWhereWithoutUserInput } from "../inputs/ReactionOnTimelinesUpdateManyWithWhereWithoutUserInput";
import { ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput";
import { ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnTimelinesUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnTimelinesUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateWithoutUserInput], {
    nullable: true
  })
  create?: ReactionOnTimelinesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ReactionOnTimelinesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionOnTimelinesCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ReactionOnTimelinesUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReactionOnTimelinesScalarWhereInput[] | undefined;
}
