import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferenceCreateInput } from "../../../inputs/ReferenceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateReferenceArgs {
  @TypeGraphQL.Field(_type => ReferenceCreateInput, {
    nullable: false
  })
  data!: ReferenceCreateInput;
}
