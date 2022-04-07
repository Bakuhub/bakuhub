import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsCreateManyThreadInputEnvelope } from "../inputs/ReactionOnThreadsCreateManyThreadInputEnvelope";
import { ReactionOnThreadsCreateOrConnectWithoutThreadInput } from "../inputs/ReactionOnThreadsCreateOrConnectWithoutThreadInput";
import { ReactionOnThreadsCreateWithoutThreadInput } from "../inputs/ReactionOnThreadsCreateWithoutThreadInput";
import { ReactionOnThreadsScalarWhereInput } from "../inputs/ReactionOnThreadsScalarWhereInput";
import { ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput } from "../inputs/ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput";
import { ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput } from "../inputs/ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput";
import { ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput } from "../inputs/ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnThreadsUpdateManyWithoutThreadInput", {
  isAbstract: true
})
export class ReactionOnThreadsUpdateManyWithoutThreadInput {
  @TypeGraphQL.Field(_type => [ReactionOnThreadsCreateWithoutThreadInput], {
    nullable: true
  })
  create?: ReactionOnThreadsCreateWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsCreateOrConnectWithoutThreadInput], {
    nullable: true
  })
  connectOrCreate?: ReactionOnThreadsCreateOrConnectWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput], {
    nullable: true
  })
  upsert?: ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsCreateManyThreadInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionOnThreadsCreateManyThreadInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput], {
    nullable: true
  })
  update?: ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput], {
    nullable: true
  })
  updateMany?: ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReactionOnThreadsScalarWhereInput[] | undefined;
}
