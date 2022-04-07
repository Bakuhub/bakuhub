import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnTimelinesWhereInput } from "../../../inputs/ReactionOnTimelinesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReactionOnTimelinesArgs {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput, {
    nullable: true
  })
  where?: ReactionOnTimelinesWhereInput | undefined;
}
