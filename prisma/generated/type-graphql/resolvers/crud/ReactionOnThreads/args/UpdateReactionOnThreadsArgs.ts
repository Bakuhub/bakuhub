import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnThreadsUpdateInput } from "../../../inputs/ReactionOnThreadsUpdateInput";
import { ReactionOnThreadsWhereUniqueInput } from "../../../inputs/ReactionOnThreadsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateReactionOnThreadsArgs {
  @TypeGraphQL.Field(_type => ReactionOnThreadsUpdateInput, {
    nullable: false
  })
  data!: ReactionOnThreadsUpdateInput;

  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnThreadsWhereUniqueInput;
}
