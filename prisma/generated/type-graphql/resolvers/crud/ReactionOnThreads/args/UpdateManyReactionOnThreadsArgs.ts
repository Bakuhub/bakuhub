import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnThreadsUpdateManyMutationInput } from "../../../inputs/ReactionOnThreadsUpdateManyMutationInput";
import { ReactionOnThreadsWhereInput } from "../../../inputs/ReactionOnThreadsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReactionOnThreadsArgs {
  @TypeGraphQL.Field(_type => ReactionOnThreadsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReactionOnThreadsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput, {
    nullable: true
  })
  where?: ReactionOnThreadsWhereInput | undefined;
}
