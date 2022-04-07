import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnVisionsOrderByWithAggregationInput } from "../../../inputs/ReactionOnVisionsOrderByWithAggregationInput";
import { ReactionOnVisionsScalarWhereWithAggregatesInput } from "../../../inputs/ReactionOnVisionsScalarWhereWithAggregatesInput";
import { ReactionOnVisionsWhereInput } from "../../../inputs/ReactionOnVisionsWhereInput";
import { ReactionOnVisionsScalarFieldEnum } from "../../../../enums/ReactionOnVisionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReactionOnVisionsArgs {
  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput, {
    nullable: true
  })
  where?: ReactionOnVisionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReactionOnVisionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "visionId" | "reaction" | "createdAt">;

  @TypeGraphQL.Field(_type => ReactionOnVisionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReactionOnVisionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
