import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsUpdateWithoutThreadInput } from "../inputs/ReactionOnThreadsUpdateWithoutThreadInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput", {
  isAbstract: true
})
export class ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput {
  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnThreadsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnThreadsUpdateWithoutThreadInput, {
    nullable: false
  })
  data!: ReactionOnThreadsUpdateWithoutThreadInput;
}
