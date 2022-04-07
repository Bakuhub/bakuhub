import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnThreadsOrderByWithAggregationInput } from "../../../inputs/ReactionOnThreadsOrderByWithAggregationInput";
import { ReactionOnThreadsScalarWhereWithAggregatesInput } from "../../../inputs/ReactionOnThreadsScalarWhereWithAggregatesInput";
import { ReactionOnThreadsWhereInput } from "../../../inputs/ReactionOnThreadsWhereInput";
import { ReactionOnThreadsScalarFieldEnum } from "../../../../enums/ReactionOnThreadsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReactionOnThreadsArgs {
  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput, {
    nullable: true
  })
  where?: ReactionOnThreadsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReactionOnThreadsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "threadId" | "reaction" | "createdAt">;

  @TypeGraphQL.Field(_type => ReactionOnThreadsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReactionOnThreadsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
