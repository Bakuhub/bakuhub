import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnTimelinesOrderByWithAggregationInput } from "../../../inputs/SubscriptionsOnTimelinesOrderByWithAggregationInput";
import { SubscriptionsOnTimelinesScalarWhereWithAggregatesInput } from "../../../inputs/SubscriptionsOnTimelinesScalarWhereWithAggregatesInput";
import { SubscriptionsOnTimelinesWhereInput } from "../../../inputs/SubscriptionsOnTimelinesWhereInput";
import { SubscriptionsOnTimelinesScalarFieldEnum } from "../../../../enums/SubscriptionsOnTimelinesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySubscriptionsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput, {
    nullable: true
  })
  where?: SubscriptionsOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SubscriptionsOnTimelinesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "timelineId" | "hasUnreadNotifications" | "lastReadAt" | "type" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SubscriptionsOnTimelinesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
