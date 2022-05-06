import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsCreateWithoutThreadInput } from "../inputs/ReactionOnThreadsCreateWithoutThreadInput";
import { ReactionOnThreadsUpdateWithoutThreadInput } from "../inputs/ReactionOnThreadsUpdateWithoutThreadInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput", {
  isAbstract: true
})
export class ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput {
  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnThreadsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnThreadsUpdateWithoutThreadInput, {
    nullable: false
  })
  update!: ReactionOnThreadsUpdateWithoutThreadInput;

  @TypeGraphQL.Field(_type => ReactionOnThreadsCreateWithoutThreadInput, {
    nullable: false
  })
  create!: ReactionOnThreadsCreateWithoutThreadInput;
}
