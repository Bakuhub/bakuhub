import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadWhereInput } from "../../../inputs/ThreadWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyThreadArgs {
  @TypeGraphQL.Field(_type => ThreadWhereInput, {
    nullable: true
  })
  where?: ThreadWhereInput | undefined;
}
