import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnTimelinesUpdateManyMutationInput } from "../../../inputs/SubscriptionsOnTimelinesUpdateManyMutationInput";
import { SubscriptionsOnTimelinesWhereInput } from "../../../inputs/SubscriptionsOnTimelinesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySubscriptionsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateManyMutationInput, {
    nullable: false
  })
  data!: SubscriptionsOnTimelinesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput, {
    nullable: true
  })
  where?: SubscriptionsOnTimelinesWhereInput | undefined;
}
