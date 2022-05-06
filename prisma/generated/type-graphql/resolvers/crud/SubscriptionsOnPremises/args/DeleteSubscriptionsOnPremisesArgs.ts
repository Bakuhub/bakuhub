import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../../../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSubscriptionsOnPremisesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnPremisesWhereUniqueInput;
}
