import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnVisionsCreateInput } from "../../../inputs/ReactionOnVisionsCreateInput";
import { ReactionOnVisionsUpdateInput } from "../../../inputs/ReactionOnVisionsUpdateInput";
import { ReactionOnVisionsWhereUniqueInput } from "../../../inputs/ReactionOnVisionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertReactionOnVisionsArgs {
  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnVisionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnVisionsCreateInput, {
    nullable: false
  })
  create!: ReactionOnVisionsCreateInput;

  @TypeGraphQL.Field(_type => ReactionOnVisionsUpdateInput, {
    nullable: false
  })
  update!: ReactionOnVisionsUpdateInput;
}
