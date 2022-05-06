import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnTimelinesCreateManyInput } from "../../../inputs/SubscriptionsOnTimelinesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySubscriptionsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateManyInput], {
    nullable: false
  })
  data!: SubscriptionsOnTimelinesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
