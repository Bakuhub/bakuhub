import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnTimelinesUpdateManyMutationInput } from "../../../inputs/ReactionOnTimelinesUpdateManyMutationInput";
import { ReactionOnTimelinesWhereInput } from "../../../inputs/ReactionOnTimelinesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReactionOnTimelinesArgs {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReactionOnTimelinesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput, {
    nullable: true
  })
  where?: ReactionOnTimelinesWhereInput | undefined;
}
