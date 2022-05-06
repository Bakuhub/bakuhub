import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnPremisesCreateInput } from "../../../inputs/SubscriptionsOnPremisesCreateInput";
import { SubscriptionsOnPremisesUpdateInput } from "../../../inputs/SubscriptionsOnPremisesUpdateInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../../../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSubscriptionsOnPremisesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateInput, {
    nullable: false
  })
  create!: SubscriptionsOnPremisesCreateInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateInput, {
    nullable: false
  })
  update!: SubscriptionsOnPremisesUpdateInput;
}
