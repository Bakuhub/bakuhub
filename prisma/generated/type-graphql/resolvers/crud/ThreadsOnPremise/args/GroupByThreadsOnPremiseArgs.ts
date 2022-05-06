import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnPremiseOrderByWithAggregationInput } from "../../../inputs/ThreadsOnPremiseOrderByWithAggregationInput";
import { ThreadsOnPremiseScalarWhereWithAggregatesInput } from "../../../inputs/ThreadsOnPremiseScalarWhereWithAggregatesInput";
import { ThreadsOnPremiseWhereInput } from "../../../inputs/ThreadsOnPremiseWhereInput";
import { ThreadsOnPremiseScalarFieldEnum } from "../../../../enums/ThreadsOnPremiseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByThreadsOnPremiseArgs {
  @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput, {
    nullable: true
  })
  where?: ThreadsOnPremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ThreadsOnPremiseOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"threadId" | "premiseId" | "assignedAt">;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ThreadsOnPremiseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
