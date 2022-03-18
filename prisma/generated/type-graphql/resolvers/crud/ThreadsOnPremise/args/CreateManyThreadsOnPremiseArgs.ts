import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnPremiseCreateManyInput } from "../../../inputs/ThreadsOnPremiseCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyThreadsOnPremiseArgs {
  @TypeGraphQL.Field(_type => [ThreadsOnPremiseCreateManyInput], {
    nullable: false
  })
  data!: ThreadsOnPremiseCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
