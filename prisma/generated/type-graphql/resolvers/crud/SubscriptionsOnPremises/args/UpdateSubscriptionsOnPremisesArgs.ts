import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnPremisesUpdateInput } from "../../../inputs/SubscriptionsOnPremisesUpdateInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../../../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSubscriptionsOnPremisesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateInput, {
    nullable: false
  })
  data!: SubscriptionsOnPremisesUpdateInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnPremisesWhereUniqueInput;
}
