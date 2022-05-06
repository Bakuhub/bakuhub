import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsCreateWithoutThreadInput } from "../inputs/ReactionOnThreadsCreateWithoutThreadInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnThreadsCreateOrConnectWithoutThreadInput", {
  isAbstract: true
})
export class ReactionOnThreadsCreateOrConnectWithoutThreadInput {
  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnThreadsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnThreadsCreateWithoutThreadInput, {
    nullable: false
  })
  create!: ReactionOnThreadsCreateWithoutThreadInput;
}
