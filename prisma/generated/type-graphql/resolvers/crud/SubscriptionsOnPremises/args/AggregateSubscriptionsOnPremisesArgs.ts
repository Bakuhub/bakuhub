import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnPremisesOrderByWithRelationInput } from "../../../inputs/SubscriptionsOnPremisesOrderByWithRelationInput";
import { SubscriptionsOnPremisesWhereInput } from "../../../inputs/SubscriptionsOnPremisesWhereInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../../../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSubscriptionsOnPremisesArgs {
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
}
