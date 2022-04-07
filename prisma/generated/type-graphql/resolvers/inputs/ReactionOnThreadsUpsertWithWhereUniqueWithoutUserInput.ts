import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsCreateWithoutUserInput } from "../inputs/ReactionOnThreadsCreateWithoutUserInput";
import { ReactionOnThreadsUpdateWithoutUserInput } from "../inputs/ReactionOnThreadsUpdateWithoutUserInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnThreadsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnThreadsUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ReactionOnThreadsUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ReactionOnThreadsCreateWithoutUserInput, {
    nullable: false
  })
  create!: ReactionOnThreadsCreateWithoutUserInput;
}
