import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferenceCreateManyInput } from "../../../inputs/ReferenceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReferenceArgs {
  @TypeGraphQL.Field(_type => [ReferenceCreateManyInput], {
    nullable: false
  })
  data!: ReferenceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
