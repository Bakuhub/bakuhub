import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnTimelinesOrderByWithRelationInput } from "../../../inputs/ReactionOnTimelinesOrderByWithRelationInput";
import { ReactionOnTimelinesWhereInput } from "../../../inputs/ReactionOnTimelinesWhereInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../../../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateReactionOnTimelinesArgs {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput, {
    nullable: true
  })
  where?: ReactionOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReactionOnTimelinesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReactionOnTimelinesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
