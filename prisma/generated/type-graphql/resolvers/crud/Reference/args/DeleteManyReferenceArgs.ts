import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferenceWhereInput } from "../../../inputs/ReferenceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReferenceArgs {
  @TypeGraphQL.Field(_type => ReferenceWhereInput, {
    nullable: true
  })
  where?: ReferenceWhereInput | undefined;
}
