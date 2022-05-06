import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsCreateManyThreadInputEnvelope } from "../inputs/ReactionOnThreadsCreateManyThreadInputEnvelope";
import { ReactionOnThreadsCreateOrConnectWithoutThreadInput } from "../inputs/ReactionOnThreadsCreateOrConnectWithoutThreadInput";
import { ReactionOnThreadsCreateWithoutThreadInput } from "../inputs/ReactionOnThreadsCreateWithoutThreadInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnThreadsCreateNestedManyWithoutThreadInput", {
  isAbstract: true
})
export class ReactionOnThreadsCreateNestedManyWithoutThreadInput {
  @TypeGraphQL.Field(_type => [ReactionOnThreadsCreateWithoutThreadInput], {
    nullable: true
  })
  create?: ReactionOnThreadsCreateWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsCreateOrConnectWithoutThreadInput], {
    nullable: true
  })
  connectOrCreate?: ReactionOnThreadsCreateOrConnectWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsCreateManyThreadInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionOnThreadsCreateManyThreadInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionOnThreadsWhereUniqueInput[] | undefined;
}
