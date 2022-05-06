import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../../../inputs/SubscriptionsOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSubscriptionsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnTimelinesWhereUniqueInput;
}
