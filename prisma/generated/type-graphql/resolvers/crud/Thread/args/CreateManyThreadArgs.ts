import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadCreateManyInput } from "../../../inputs/ThreadCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyThreadArgs {
  @TypeGraphQL.Field(_type => [ThreadCreateManyInput], {
    nullable: false
  })
  data!: ThreadCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
