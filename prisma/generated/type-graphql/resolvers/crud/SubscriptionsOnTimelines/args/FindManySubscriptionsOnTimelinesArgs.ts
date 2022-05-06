import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnTimelinesOrderByWithRelationInput } from "../../../inputs/SubscriptionsOnTimelinesOrderByWithRelationInput";
import { SubscriptionsOnTimelinesWhereInput } from "../../../inputs/SubscriptionsOnTimelinesWhereInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../../../inputs/SubscriptionsOnTimelinesWhereUniqueInput";
import { SubscriptionsOnTimelinesScalarFieldEnum } from "../../../../enums/SubscriptionsOnTimelinesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySubscriptionsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput, {
    nullable: true
  })
  where?: SubscriptionsOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SubscriptionsOnTimelinesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput, {
    nullable: true
  })
  cursor?: SubscriptionsOnTimelinesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "timelineId" | "hasUnreadNotifications" | "lastReadAt" | "type" | "createdAt" | "updatedAt"> | undefined;
}
