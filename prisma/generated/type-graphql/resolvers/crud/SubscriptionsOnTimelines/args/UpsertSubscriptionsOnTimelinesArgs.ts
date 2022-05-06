import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnTimelinesCreateInput } from "../../../inputs/SubscriptionsOnTimelinesCreateInput";
import { SubscriptionsOnTimelinesUpdateInput } from "../../../inputs/SubscriptionsOnTimelinesUpdateInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../../../inputs/SubscriptionsOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSubscriptionsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateInput, {
    nullable: false
  })
  create!: SubscriptionsOnTimelinesCreateInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateInput, {
    nullable: false
  })
  update!: SubscriptionsOnTimelinesUpdateInput;
}
