import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsCreateManyUserInputEnvelope } from "../inputs/ReactionOnThreadsCreateManyUserInputEnvelope";
import { ReactionOnThreadsCreateOrConnectWithoutUserInput } from "../inputs/ReactionOnThreadsCreateOrConnectWithoutUserInput";
import { ReactionOnThreadsCreateWithoutUserInput } from "../inputs/ReactionOnThreadsCreateWithoutUserInput";
import { ReactionOnThreadsScalarWhereInput } from "../inputs/ReactionOnThreadsScalarWhereInput";
import { ReactionOnThreadsUpdateManyWithWhereWithoutUserInput } from "../inputs/ReactionOnThreadsUpdateManyWithWhereWithoutUserInput";
import { ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput";
import { ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnThreadsUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnThreadsUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ReactionOnThreadsCreateWithoutUserInput], {
    nullable: true
  })
  create?: ReactionOnThreadsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ReactionOnThreadsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionOnThreadsCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput], {
    nullable: true
  })
  set?: ReactionOnThreadsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReactionOnThreadsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput], {
    nullable: true
  })
  delete?: ReactionOnThreadsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionOnThreadsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ReactionOnThreadsUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReactionOnThreadsScalarWhereInput[] | undefined;
}
