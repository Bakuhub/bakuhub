import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsCreateManyUserInputEnvelope } from "../inputs/ReactionOnVisionsCreateManyUserInputEnvelope";
import { ReactionOnVisionsCreateOrConnectWithoutUserInput } from "../inputs/ReactionOnVisionsCreateOrConnectWithoutUserInput";
import { ReactionOnVisionsCreateWithoutUserInput } from "../inputs/ReactionOnVisionsCreateWithoutUserInput";
import { ReactionOnVisionsScalarWhereInput } from "../inputs/ReactionOnVisionsScalarWhereInput";
import { ReactionOnVisionsUpdateManyWithWhereWithoutUserInput } from "../inputs/ReactionOnVisionsUpdateManyWithWhereWithoutUserInput";
import { ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput";
import { ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnVisionsUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnVisionsUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ReactionOnVisionsCreateWithoutUserInput], {
    nullable: true
  })
  create?: ReactionOnVisionsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ReactionOnVisionsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionOnVisionsCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput], {
    nullable: true
  })
  set?: ReactionOnVisionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReactionOnVisionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput], {
    nullable: true
  })
  delete?: ReactionOnVisionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionOnVisionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ReactionOnVisionsUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReactionOnVisionsScalarWhereInput[] | undefined;
}
