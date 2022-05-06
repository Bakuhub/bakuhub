import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnPremisesOrderByWithRelationInput } from "../../../inputs/SubscriptionsOnPremisesOrderByWithRelationInput";
import { SubscriptionsOnPremisesWhereInput } from "../../../inputs/SubscriptionsOnPremisesWhereInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../../../inputs/SubscriptionsOnPremisesWhereUniqueInput";
import { SubscriptionsOnPremisesScalarFieldEnum } from "../../../../enums/SubscriptionsOnPremisesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySubscriptionsOnPremisesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput, {
    nullable: true
  })
  where?: SubscriptionsOnPremisesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SubscriptionsOnPremisesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput, {
    nullable: true
  })
  cursor?: SubscriptionsOnPremisesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "premiseId" | "hasUnreadNotifications" | "lastReadAt" | "type" | "createdAt" | "updatedAt"> | undefined;
}
