import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsUpdateWithoutUserInput } from "../inputs/ReactionOnThreadsUpdateWithoutUserInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnThreadsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnThreadsUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ReactionOnThreadsUpdateWithoutUserInput;
}
