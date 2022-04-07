import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnVisionsUpdateManyMutationInput } from "../../../inputs/ReactionOnVisionsUpdateManyMutationInput";
import { ReactionOnVisionsWhereInput } from "../../../inputs/ReactionOnVisionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReactionOnVisionsArgs {
  @TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReactionOnVisionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput, {
    nullable: true
  })
  where?: ReactionOnVisionsWhereInput | undefined;
}
