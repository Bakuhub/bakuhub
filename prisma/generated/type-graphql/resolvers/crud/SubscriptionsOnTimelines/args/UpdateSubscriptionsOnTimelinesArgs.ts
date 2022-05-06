import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnTimelinesUpdateInput } from "../../../inputs/SubscriptionsOnTimelinesUpdateInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../../../inputs/SubscriptionsOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSubscriptionsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateInput, {
    nullable: false
  })
  data!: SubscriptionsOnTimelinesUpdateInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnTimelinesWhereUniqueInput;
}
