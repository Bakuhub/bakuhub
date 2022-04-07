import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsCreateManyUserInputEnvelope } from "../inputs/ReactionOnThreadsCreateManyUserInputEnvelope";
import { ReactionOnThreadsCreateOrConnectWithoutUserInput } from "../inputs/ReactionOnThreadsCreateOrConnectWithoutUserInput";
import { ReactionOnThreadsCreateWithoutUserInput } from "../inputs/ReactionOnThreadsCreateWithoutUserInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnThreadsCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnThreadsCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ReactionOnThreadsCreateWithoutUserInput], {
    nullable: true
  })
  create?: ReactionOnThreadsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ReactionOnThreadsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionOnThreadsCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionOnThreadsWhereUniqueInput[] | undefined;
}
