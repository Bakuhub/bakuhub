import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferenceWhereUniqueInput } from "../../../inputs/ReferenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueReferenceArgs {
  @TypeGraphQL.Field(_type => ReferenceWhereUniqueInput, {
    nullable: false
  })
  where!: ReferenceWhereUniqueInput;
}
