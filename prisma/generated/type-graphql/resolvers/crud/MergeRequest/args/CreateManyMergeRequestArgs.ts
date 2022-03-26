import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MergeRequestCreateManyInput } from "../../../inputs/MergeRequestCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMergeRequestArgs {
  @TypeGraphQL.Field(_type => [MergeRequestCreateManyInput], {
    nullable: false
  })
  data!: MergeRequestCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
