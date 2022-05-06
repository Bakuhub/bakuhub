import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionsOnPremisesCreateManyInput } from "../../../inputs/SubscriptionsOnPremisesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySubscriptionsOnPremisesArgs {
  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateManyInput], {
    nullable: false
  })
  data!: SubscriptionsOnPremisesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
