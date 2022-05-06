import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnPremisesCreateInput } from "../../../inputs/SubscriptionsOnPremisesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSubscriptionsOnPremisesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateInput, {
    nullable: false
  })
  data!: SubscriptionsOnPremisesCreateInput;
}
