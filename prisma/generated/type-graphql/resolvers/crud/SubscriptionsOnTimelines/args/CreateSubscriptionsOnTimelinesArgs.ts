import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnTimelinesCreateInput } from "../../../inputs/SubscriptionsOnTimelinesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSubscriptionsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateInput, {
    nullable: false
  })
  data!: SubscriptionsOnTimelinesCreateInput;
}
