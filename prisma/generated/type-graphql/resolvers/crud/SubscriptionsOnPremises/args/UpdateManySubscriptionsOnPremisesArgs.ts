import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnPremisesUpdateManyMutationInput } from "../../../inputs/SubscriptionsOnPremisesUpdateManyMutationInput";
import { SubscriptionsOnPremisesWhereInput } from "../../../inputs/SubscriptionsOnPremisesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySubscriptionsOnPremisesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateManyMutationInput, {
    nullable: false
  })
  data!: SubscriptionsOnPremisesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput, {
    nullable: true
  })
  where?: SubscriptionsOnPremisesWhereInput | undefined;
}
