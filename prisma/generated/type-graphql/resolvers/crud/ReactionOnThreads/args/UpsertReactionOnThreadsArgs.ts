import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnThreadsCreateInput } from "../../../inputs/ReactionOnThreadsCreateInput";
import { ReactionOnThreadsUpdateInput } from "../../../inputs/ReactionOnThreadsUpdateInput";
import { ReactionOnThreadsWhereUniqueInput } from "../../../inputs/ReactionOnThreadsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertReactionOnThreadsArgs {
  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnThreadsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnThreadsCreateInput, {
    nullable: false
  })
  create!: ReactionOnThreadsCreateInput;

  @TypeGraphQL.Field(_type => ReactionOnThreadsUpdateInput, {
    nullable: false
  })
  update!: ReactionOnThreadsUpdateInput;
}
