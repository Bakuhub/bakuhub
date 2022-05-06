import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnPremisesWhereInput } from "../../../inputs/SubscriptionsOnPremisesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySubscriptionsOnPremisesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput, {
    nullable: true
  })
  where?: SubscriptionsOnPremisesWhereInput | undefined;
}
