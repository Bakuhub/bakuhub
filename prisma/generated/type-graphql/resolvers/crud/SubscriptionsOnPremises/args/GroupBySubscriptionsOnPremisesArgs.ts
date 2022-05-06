import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnPremisesOrderByWithAggregationInput } from "../../../inputs/SubscriptionsOnPremisesOrderByWithAggregationInput";
import { SubscriptionsOnPremisesScalarWhereWithAggregatesInput } from "../../../inputs/SubscriptionsOnPremisesScalarWhereWithAggregatesInput";
import { SubscriptionsOnPremisesWhereInput } from "../../../inputs/SubscriptionsOnPremisesWhereInput";
import { SubscriptionsOnPremisesScalarFieldEnum } from "../../../../enums/SubscriptionsOnPremisesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySubscriptionsOnPremisesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput, {
    nullable: true
  })
  where?: SubscriptionsOnPremisesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SubscriptionsOnPremisesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "premiseId" | "hasUnreadNotifications" | "lastReadAt" | "type" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SubscriptionsOnPremisesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
