import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsCreateManyUserInputEnvelope } from "../inputs/ReactionOnVisionsCreateManyUserInputEnvelope";
import { ReactionOnVisionsCreateOrConnectWithoutUserInput } from "../inputs/ReactionOnVisionsCreateOrConnectWithoutUserInput";
import { ReactionOnVisionsCreateWithoutUserInput } from "../inputs/ReactionOnVisionsCreateWithoutUserInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnVisionsCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnVisionsCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ReactionOnVisionsCreateWithoutUserInput], {
    nullable: true
  })
  create?: ReactionOnVisionsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ReactionOnVisionsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionOnVisionsCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionOnVisionsWhereUniqueInput[] | undefined;
}
