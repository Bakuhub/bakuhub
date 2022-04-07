import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsCreateWithoutUserInput } from "../inputs/ReactionOnThreadsCreateWithoutUserInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnThreadsCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnThreadsCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnThreadsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnThreadsCreateWithoutUserInput, {
    nullable: false
  })
  create!: ReactionOnThreadsCreateWithoutUserInput;
}
