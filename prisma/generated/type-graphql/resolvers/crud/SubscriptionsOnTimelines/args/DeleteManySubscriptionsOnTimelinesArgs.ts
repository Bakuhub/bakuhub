import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnTimelinesWhereInput } from "../../../inputs/SubscriptionsOnTimelinesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySubscriptionsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput, {
    nullable: true
  })
  where?: SubscriptionsOnTimelinesWhereInput | undefined;
}
